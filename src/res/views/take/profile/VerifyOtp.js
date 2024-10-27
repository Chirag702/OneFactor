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
    const fetchEmail = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('https://api2.onefactor.in/api/user/profile', {
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

    useEffect(() => {
        fetchEmail();
    }, []);

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const verifyOtp = async () => {
        setIsLoading(true);
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(
                'https://api2.onefactor.in/api/auth/verify/email',
                { "otp": otp },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response)
            if (response.status === 200) {
                console.log('OTP verified:', response.data);

                // Update the email verification status in localStorage
                localStorage.setItem('isEmailVerified', 'true');
                navigate("/initProfile");

                // Redirect to home after successful verification
            } else {
                console.error('OTP verification failed');
            }
        } catch (error) {
            console.error('Error:', error);
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
                <Form>
                    <h1>Verify OTP</h1>
                    <p>Please enter the OTP sent to your email.</p>
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
                        onClick={verifyOtp}
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
