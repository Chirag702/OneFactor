import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../../components/NavBar';

const RReset = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { token } = useParams(); // Retrieve token from URL
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            setIsLoading(false);
            return;
        }

        const apiUrl = 'https://api2.onefactor.in/api/auth/reset-password?token=' + token;
        const payload = { newPassword: password };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const responseBody = await response.json();

            if (response.ok) {
                setMessage('Password reset successfully! Redirecting to login.');
                setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
            } else {
                setMessage(`Error: ${responseBody.message || 'Failed to reset password.'}`);
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            setMessage('An error occurred while resetting the password.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <NavBar />
            <div className="col-lg-3 container mt-5 mb-auto p-3">
                <h2>Reset Password</h2>
                <form onSubmit={handleResetPassword} autoComplete='true'>
                    <div>
                        <label htmlFor="password">New Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
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
                            onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value={isLoading ? 'Resetting...' : 'Reset Password'}
                            disabled={isLoading}
                        />
                    </div>
                    {message && <p>{message}</p>} {/* Display any message */}
                </form>
            </div>
        </>
    );
};

export default RReset;
