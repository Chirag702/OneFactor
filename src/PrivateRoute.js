import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

// Function to fetch user data from the REST API
const fetchUserData = async (token) => {
    const response = await fetch('https://api2.jobseekr.in/api/user/profile', {
        method: 'GET',
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
        const getUserData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError('No token found');
                setLoading(false);
                navigate('/'); // Navigate to login if no token is found
                return;
            }

            try {
                const data = await fetchUserData(token);
                setUserData(data);
                localStorage.setItem('isEmailVerified', data.isEmailVerified ? 'true' : 'false');
            } catch (err) {
                setError(err.message);
                localStorage.clear(); // Clear localStorage on error (like invalid token)
                navigate('/'); // Navigate to login if an error occurs
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, [navigate]); // Add navigate to the dependency array to avoid missing navigation ref

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return null; // Return nothing as the navigation to '/' will handle the redirect
    }

    if (!userData) {
        localStorage.clear();
        navigate('/'); // Redirect to login if user data is missing
        return null;
    }

    const { fname, lname, gender } = userData;
    const isEmailVerified = localStorage.getItem('isEmailVerified') === 'true';

    // Handle access to /verifyOtp
    if (location.pathname === '/verifyOtp') {
        if (!isEmailVerified) {
            return children; // Allow access to verifyOtp if email is not verified
        }
        return <Navigate to="/home" replace />; // Redirect to home if email is verified
    }

    // If user is on /initProfile
    if (location.pathname === '/initProfile') {
        if (!isEmailVerified) {
            return <Navigate to="/verifyOtp" replace />; // Redirect to verifyOtp if email is not verified
        }
        if (fname && lname && gender) {
            return <Navigate to="/home" replace />; // Redirect to home if email is verified and profile complete
        }
        return children; // Render initProfile if profile is incomplete
    }

    // Redirect to initProfile if profile details are incomplete
    if (!fname || !lname || !gender) {
        return <Navigate to="/initProfile" replace />;
    }

    // Render the protected route's content if all conditions are met
    return children;
};

export default PrivateRoute;
