import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar';

// Helper function to extract 'onefactor' token from cookie
const extractToken = (cookie) => {
    console.error(cookie);
    if (!cookie) return '';

    const parts = cookie.split(';');
    let jobseekrCookiePart;

    try {
        jobseekrCookiePart = parts.find((part) => part.trim().startsWith('jobseekr='));
    } catch (e) {
        jobseekrCookiePart = null;
    }

    if (!jobseekrCookiePart) return '';

    const jobseekrCookieValue = jobseekrCookiePart.trim().substring('jobseekr='.length);
    return jobseekrCookieValue;
};

const RSignin = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const navigate = useNavigate();
    const from = location.state?.from || '/home'; // Ensure 'from' is defined inside the function

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setIsLoading(true);
        setErrorMessage(''); // Clear previous error message

        const apiUrl = 'https://api2.onefactor.in/api/auth/signin';
        const data = {
            username: email,
            email: email,
            password: password,
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const responseBody = await response.json(); // Read response body as text

            if (response.ok) {
                const onefactorToken = await extractToken(responseBody.token);
                if (onefactorToken) {
                    localStorage.clear();
                    localStorage.setItem('token', onefactorToken);
                    localStorage.setItem('isLoggedIn', 'true');

                    // Redirect to another page
                    navigate(from, { replace: true });
                } else {
                    console.log('Token not found');
                }
            } else {
                setErrorMessage('Invalid credentials. Please try again.'); // Set error message for invalid credentials
            }
        } catch (error) {
            console.error('Error posting data:', error);
            setErrorMessage('An error occurred. Please try again later.'); // Set error message for any other error
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>

            <Helmet>
                <title>Signin | OneFactor</title>
            </Helmet>
            <NavBar />
            <div className="col-lg-3 container mt-5 mb-auto p-3">
                <div>
                    <h2>Login</h2>
                    <p>
                        Don't have an account?
                        <span>
                            <Link to="/r/signup" className="link_tag ml-2">
                                Sign Up
                            </Link>
                        </span>
                    </p>

                    {/* Error Notification */}
                    {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleLogin} autoComplete='true'>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="login_email"
                                name="email"
                                required
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="login_password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="submit" value={isLoading ? 'Logging in...' : 'Login'} disabled={isLoading} />
                        </div>
                        <Link to="/r/forgot" className="link_tag">
                            Forgot password?
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RSignin;
