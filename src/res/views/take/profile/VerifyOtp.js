import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from '../../../components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Fetch email from API
    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://api3.onefactor.in/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.status === 200) {
                    setEmail(response.data.email);
                } else {
                    console.error('Failed to fetch email');
                }
            } catch (error) {
                console.error('Error fetching email:', error);
            }
        };
        fetchEmail();
    }, []);

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const verifyOtp = async () => {
        setIsLoading(true);
        const token = localStorage.getItem('token');

        try {
            // Verify OTP
            const otpResponse = await axios.post(
                'https://api3.onefactor.in/auth/verify/email',
                { otp },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (otpResponse.status === 200) {
                // Update the user's profile after OTP verification
                const profileUpdateResponse = await axios.put(
                    'https://api3.onefactor.in/users/update',
                    { isEmailVerified: true },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (profileUpdateResponse.status === 200) {
                    localStorage.setItem('isEmailVerified', 'true');
                    navigate('/initProfile');
                } else {
                    console.error('Profile update failed');
                }
            } else {
                console.error('OTP verification failed');
            }
        } catch (error) {
            console.error('Error verifying OTP or updating profile:', error);
            alert('Verification failed. Please check the OTP and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Verify | OneFactor</title>
            </Helmet>
            <NavBar />
            <Container id="main2" className="p-4 col-lg-6 mt-4">
                <Form onSubmit={(e) => { e.preventDefault(); verifyOtp(); }}>
                    <h1>Verify OTP</h1>
                    <p>Please enter the OTP sent to your email ({email}).</p>
                    <hr />
                    <Row>
                        <Col>
                            <Form.Group controlId="otp">
                                <Form.Label>Enter OTP</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={handleOtpChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <hr />
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Verifying...' : 'Verify OTP'}
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default VerifyOtp;
