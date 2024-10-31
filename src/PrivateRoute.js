import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

// Function to fetch user data from the REST API
const fetchUserVerified = async (token) => {
    const response = await fetch('https://api3.onefactor.in/auth/is/email/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    console.log(token);
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
        const getUserVerified = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('No token found');
                setLoading(false);
                // Store the attempted URL in the state and redirect to login
                navigate('/r/signin', { state: { from: location.pathname } });
                return;
            }

            try {
                const data = await fetchUserVerified(token);
                setUserData(data);
                console.log(data);
                localStorage.setItem('isEmailVerified', data);
            } catch (err) {
                setError(err.message);
                localStorage.clear(); // Clear localStorage on error (like invalid token)
                navigate('/r/signin', { state: { from: location.pathname } });
            } finally {
                setLoading(false);
            }
        };

        getUserVerified();
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

    const { fname, lname, gender } = userData;
    const isEmailVerified = localStorage.getItem('isEmailVerified') === 'true';

    if (location.pathname === '/verifyOtp') {
        if (!isEmailVerified) {
            return children;
        }
        return <Navigate to="/home" replace />;
    }

    if (location.pathname === '/initProfile') {
        if (!isEmailVerified) {
            return <Navigate to="/verifyOtp" replace />;
        }
        if (fname && lname && gender) {
            return <Navigate to="/home" replace />;
        }
        return children;
    }

    if (!fname || !lname || !gender) {
        return <Navigate to="/initProfile" replace />;
    }

    return children;
};
export default PrivateRoute;