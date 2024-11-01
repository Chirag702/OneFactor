import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

// Function to fetch user data from the REST API
const fetchUserData = async (token) => {
    const response = await fetch('https://api3.onefactor.in/user/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("Unauthorized"); // Throw an error to be caught in the try-catch
        } else {
            const errorText = await response.text();
            throw new Error(errorText);
        }
    }

    return response.json(); // Return JSON if response is ok
};

const PrivateRoute = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const getUserData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('No token found');
                setLoading(false);
                // Store the attempted URL in the state and redirect to login
                navigate('/r/signin', { state: { from: location.pathname } });
                return;
            }

            try {
                const data = await fetchUserData(token);
                setUserData(data);
                localStorage.setItem('isEmailVerified', data.emailVerified);
            } catch (err) {
                setError(err.message);
                localStorage.clear(); // Clear localStorage on error (like invalid token)
                navigate('/r/signin', { state: { from: location.pathname } });
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, [navigate, location.pathname]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return null;
    }

    if (!userData) {
        localStorage.clear();
        navigate('/r/signin', { state: { from: location.pathname } });
        return null;
    }

    const { fname, lname, gender, emailVerified } = userData;

    if (!emailVerified) {
        // If email is not verified, navigate to OTP verification unless already there
        if (location.pathname !== '/verifyOtp') {
            return <Navigate to="/verifyOtp" replace />;
        }
        return children;
    }

    if (location.pathname === '/verifyOtp' && emailVerified) {
        // If email is verified, navigate to home or profile init
        return <Navigate to={fname && lname && gender ? "/home" : "/initProfile"} replace />;
    }

    if (location.pathname === '/initProfile') {
        // If initializing profile, check if fields are present
        if (fname && lname && gender) {
            return <Navigate to="/home" replace />;
        }
        return children;
    }

    // For all other routes, ensure profile details are filled
    if (!fname || !lname || !gender) {
        return <Navigate to="/initProfile" replace />;
    }

    return children;
};

export default PrivateRoute;
