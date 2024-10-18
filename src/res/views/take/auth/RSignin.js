import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/NavBar';

// Helper function to extract 'onefactor' token from cookie
// Helper function to extract 'jobseekr' token from cookie
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setIsLoading(true);

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
                console.log(responseBody.token);

                const onefactorToken = await extractToken(responseBody.token);
                console.log(onefactorToken);
                if (onefactorToken) {
                    console.log('onefactor Cookie:', onefactorToken);
                    localStorage.clear();
                    localStorage.setItem('token', onefactorToken);
                    localStorage.setItem('isLoggedIn', 'true');

                    // Redirect to another page
                    navigate('/home'); // Replace with your desired route
                } else {
                    console.log('Token not found');
                }
            } else {
                console.log('Login failed:', response.status);
            }
        } catch (error) {
            console.error('Error posting data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <NavBar />
            <div className="col-lg-3 container mt-5 mb-auto p-3">
                <div>
                    <h2>Login</h2>
                    <p>
                        Don't have an account?
                        <span>
                            <a href="../assets/signup.html" className="link_tag ml-2">
                                Sign Up
                            </a>
                        </span>
                    </p>

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
                                onChange={(e) => setEmail(e.target.value)} // Fixed this line
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
                        <a href="/reset-password" className="link_tag"> {/* Updated link for forgot password */}
                            Forgot password?
                        </a>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RSignin;
