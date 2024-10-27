import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar';
import { Helmet } from 'react-helmet';

const RForgot = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        const apiUrl = 'https://api2.onefactor.in/api/auth/forgot-password?email=' + email; // Update with your actual API URL

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const responseBody = await response.json();

            if (response.ok) {
                setMessage('Password reset email sent successfully! Check your inbox.');
                // Optionally redirect after a delay or based on user action
                setTimeout(() => navigate('/r/signin'), 3000); // Redirect to login after 3 seconds
            } else {
                setMessage(`Error: ${responseBody.message || 'Failed to send email.'}`);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('An error occurred while sending the email.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Forgot | OneFactor</title>
            </Helmet>
            <NavBar />
            <div className="col-lg-3 container mt-5 mb-auto p-3">
                <h2>Send Reset Email</h2>
                <form onSubmit={handleSendEmail} autoComplete='true'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="reset_email"
                            name="email"
                            required
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                        />
                        <input type="submit" value={isLoading ? 'Sending...' : 'Send Email'} disabled={isLoading} />
                    </div>
                    {message && <p>{message}</p>} {/* Display any message */}
                </form>
            </div>
        </>
    );
};

export default RForgot;
