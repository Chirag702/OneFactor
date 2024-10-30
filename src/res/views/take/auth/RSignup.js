import React, { useState } from 'react';
import NavBar from '../../../components/NavBar';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import UserService from '../../../service/UserService';
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

function RSignup() {
    const [formData, setFormData] = useState({
        companyName: '',
        yourRole: '',
        phone: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('https://api3.onefactor.in/auth/signup', {
                username: formData.email,
                email: formData.email,
                password: formData.password,
            });

            if (response.status === 200) {
                const token = await response.data.token;
                var realToken = await extractToken(token)
                await localStorage.setItem('token', realToken);
                UserService.saveUser(formData.companyName, formData.yourRole, formData.phone, formData.email);

            } else {
                setError('Failed to create account.');
            }
        } catch (err) {
            setError(`Error: ${err.response?.data?.message || err.message}`);
        }

        setIsLoading(false);
    };

    return (
        <>
            <Helmet>
                <title>Signup | OneFactor</title>
            </Helmet>
            <NavBar />
            <Container id="signup" className="col-lg-5 mt-5 p-3">
                <h1>Ready to refer or get referred? Join now!</h1>
                <p>
                    If you are looking for a job,{' '}
                    <span>
                        <Link to="/r/signin" className="link_tag">click here</Link>
                    </span>
                </p>
                <Container className="">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-1" controlId="companyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Amazon or CareerZen consulting"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="companyRole">
                            <Form.Label>Your Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Talent Acquisition Specialist"
                                value={formData.companyRole}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="phone">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="81234 56789"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Your company email address"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Set a password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-1 d-flex align-items-center" controlId="agree">
                            <Form.Check
                                type="checkbox"
                                label={
                                    <>
                                        I agree to the <Link to="/terms" target="_blank" className="link_tag" style={{ textDecoration: 'underline' }}>Terms of Service</Link> and
                                        <Link to="/privacy" target="_blank" className="link_tag" style={{ textDecoration: 'underline', marginLeft: '5px' }}>Privacy Policy</Link>.
                                    </>
                                }
                                required
                                style={{ marginRight: '10px' }}
                            />
                        </Form.Group>
                        <Button type="submit" className="btn btn-success mb-1" disabled={isLoading}>
                            {isLoading ? 'Signing up...' : 'Get Started »'}
                        </Button>
                        {error && <p className="text-danger">{error}</p>}
                    </Form>
                    <p>
                        Already have an account? <Link to="/r/signin" className="link_tag">Log in here</Link>
                    </p>
                </Container>
            </Container>
        </>
    );
}

export default RSignup;
