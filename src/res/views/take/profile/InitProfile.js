import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from '../../../components/NavBar';
import { useNavigate } from 'react-router-dom'; // Add this for navigation
import axios from 'axios'; // Use axios for API requests
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const InitProfile = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await saveInitialProfile(formData.firstName, formData.lastName, formData.gender);
    };

    const saveInitialProfile = async (fname, lname, gender) => {
        setIsLoading(true);

        const token = localStorage.getItem('token'); // Replace with your preferred method to retrieve the token

        if (!token) {
            setIsLoading(false);
            alert('Token not found'); // Use alert for simplicity
            return;
        }

        try {
            const response = await axios.PUT(
                "https://api3.onefactor.in/users/update",
                {
                    fname,
                    lname,
                    gender,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            setIsLoading(false);

            if (response.status === 200) {
                console.log(response.data);
                navigate('/home'); // Change to your main screen route
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Helmet>
                <title>complete | OneFactor</title>
            </Helmet>
            <NavBar />
            <Container id="main2" className="p-4 col-lg-6 mt-4">
                <Form onSubmit={handleSubmit}>
                    <h1>Create your profile</h1>
                    <p>We just need some quick info about your ideal job.</p>
                    <hr />
                    <Row>
                        <Col>
                            <Form.Group controlId="firstName">
                                <Form.Label>What is your first name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="e.g. Neha"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="lastName">
                                <Form.Label>What is your last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="e.g. Sharma"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="gender">
                        <Form.Label>What is your gender:</Form.Label>
                        <Form.Control as="select" name="gender" required onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Control>
                    </Form.Group>
                    <hr />
                    <Button type="submit" variant="primary" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Next'}
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default InitProfile;
