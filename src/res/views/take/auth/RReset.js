import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import { Helmet } from 'react-helmet';

const RReset = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isTokenValid, setIsTokenValid] = useState(true);
    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const checkTokenValidity = async () => {
            setIsLoading(true);
            const apiUrl = `https://api2.onefactor.in/api/auth/validate-token?token=${token}`;
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (!response.ok) {
                    setIsTokenValid(false);
                    setMessage('Invalid or expired token. Please request a new password reset.');
                }
            } catch (error) {
                console.error('Error validating token:', error);
                setIsTokenValid(false);
                setMessage('An error occurred while validating the token.');
            } finally {
                setIsLoading(false);
            }
        };

        checkTokenValidity();
    }, [token]);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            setIsLoading(false);
            return;
        }

        if (!token) {
            setMessage('Invalid or missing token.');
            setIsLoading(false);
            return;
        }

        const apiUrl = `https://api2.onefactor.in/api/auth/reset-password?token=${token}`;

        const handleResetPassword = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            setMessage('');

            if (password !== confirmPassword) {
                setMessage('Passwords do not match');
                setIsLoading(false);
                return;
            }

            const apiUrl = `https://api2.onefactor.in/api/auth/reset-password?token=${token}`;

            const payload = { newPassword: password }; // Create payload as JSON object

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Set content-type to JSON
                    },
                    body: JSON.stringify(payload), // Convert payload to JSON string
                });

                const responseBody = await response.json();

                if (response.ok) {
                    setMessage('Password reset successfully! Redirecting to login...');
                    setTimeout(() => navigate('/r/signin'), 3000);
                } else {
                    setMessage(`Error: ${responseBody.message || 'Failed to reset password.'}`);
                }
            } catch (error) {
                console.error('Error resetting password:', error);
                setMessage('An error occurred while resetting the password. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Password reset | OneFactor</title>
            </Helmet>
            <NavBar />
            <div className="col-lg-3 container mt-5 mb-auto p-3">
                <h2>Reset Password</h2>
                {isLoading ? "Loading..." : isTokenValid ? (
                    <form onSubmit={handleResetPassword} autoComplete="true">
                        <div>
                            <label htmlFor="password">New Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value={isLoading ? 'Resetting...' : 'Reset Password'}
                                disabled={isLoading}
                            />
                        </div>
                        {message && <p>{message}</p>}
                    </form>
                ) : (
                    <p>{message}</p>
                )}
            </div>
        </>
    );
};

export default RReset;
