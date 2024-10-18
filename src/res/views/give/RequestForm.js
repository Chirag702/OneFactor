import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar';

const extractToken = (cookie) => {
    if (!cookie) return '';

    const parts = cookie.split(';');
    const jobseekrCookiePart = parts.find((part) => part.trim().startsWith('jobseekr='));

    if (!jobseekrCookiePart) return '';

    const jobseekrCookieValue = jobseekrCookiePart.trim().substring('jobseekr='.length);
    return jobseekrCookieValue;
};

const fetchUserData = async (token) => {
    const response = await fetch('https://api2.jobseekr.in/api/user/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
    }

    return response.json();
};

function RequestForm() {
    const [formData, setFormData] = useState({
        companyName: '',
        companyRole: '',
        phone: '',
        email: '',
        linkedinProfile: '',
        experience: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setError("No token found");
                setLoading(false);
                return;
            }

            try {
                const data = await fetchUserData(token);
                setUserData(data);
                localStorage.setItem('isEmailVerified', data.isEmailVerified ? 'true' : 'false');
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, []);

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
        const token = localStorage.getItem('token');

        if (!token) {
            // If no token, navigate to signup page
            setError("No token found");
            return;
        }

        try {
            const response = await axios.post('https://api2.jobseekr.in/api/referrers', {
                username: formData.email,
                email: formData.email,
                password: formData.linkedinProfile, // Assuming you're using the LinkedIn profile as the password
                companyName: formData.companyName,
                companyRole: formData.companyRole,
                phone: formData.phone,
                experience: formData.experience,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });


            if (response.status === 200) {
                navigate('/success'); // Navigate to home page after successful signup
            } else {
                setError('Failed to create account.');
            }
        } catch (err) {
            setError(`Error: ${err.response?.data?.message || err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <NavBar />

            {isLoading ? null : (userData && userData.isReferrerFormSubmitted)
                ? <Navigate to="/referrer/success" /> : <Container id="signup" className="col-lg-5 mt-5 p-3">
                    <h1>Get Approved to Refer: Unlock Your Referral Potential!</h1>
                    <p>
                        Before you can start referring candidates to your company, please complete this approval form.
                        Once approved, you'll be able to refer talented individuals to your dashboard.
                    </p>
                    <Container>
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
                            <Form.Group className="mb-1" controlId="linkedinProfile">
                                <Form.Label>LinkedIn Profile</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="LinkedIn Profile URL"
                                    value={formData.linkedinProfile}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="experience">
                                <Form.Label>Experience (in years)</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Years of Experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-1 d-flex align-items-center" controlId="agree">
                                <Form.Check
                                    type="checkbox"
                                    label="I agree to the Terms of Service and Privacy Policy."
                                    required
                                    style={{ marginRight: '10px' }}
                                />
                            </Form.Group>
                            <Button type="submit" className="btn btn-success mb-1" disabled={isLoading}>
                                {isLoading ? 'Sending...' : 'Send »'}
                            </Button>
                            {error && <p className="text-danger">{error}</p>}
                        </Form>
                    </Container>
                </Container>
            } </>
    );
}

export default RequestForm;
