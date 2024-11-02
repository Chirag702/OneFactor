import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from '../../../components/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const InitProfile = () => {
    const [formData, setFormData] = useState({
        fname: '',  // Changed to fname for consistency
        lname: '',
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
        if (!formData.fname || !formData.lname || !formData.gender) {
            alert("Please fill in all fields.");
            return;
        }
        await saveInitialProfile(formData.fname, formData.lname, formData.gender);
    };

    const saveInitialProfile = async (fname, lname, gender) => {
        setIsLoading(true);

        const token = localStorage.getItem('token');
        if (!token) {
            setIsLoading(false);
            alert('Token not found. Please log in again.');
            return;
        }

        try {
            const response = await axios.put(
                "https://api3.onefactor.in/users/update",
                { fname, lname, gender },  // Send only fname, lname, gender
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                navigate('/home'); // Update to your main route
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving the profile. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Complete Profile | OneFactor</title>
            </Helmet>
            <NavBar />
            <Container id="main2" className="p-4 col-lg-6 mt-4">
                <Form onSubmit={handleSubmit}>
                    <h1>Create your profile</h1>
                    <p>We just need some quick info about your ideal job.</p>
                    <hr />
                    <Row>
                        <Col>
                            <Form.Group controlId="fname">
                                <Form.Label>What is your first name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fname" // Changed to fname
                                    placeholder="e.g. Neha"
                                    required
                                    value={formData.fname}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="lname">
                                <Form.Label>What is your last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lname" // Changed to lname
                                    placeholder="e.g. Sharma"
                                    required
                                    value={formData.lname}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="gender">
                        <Form.Label>What is your gender:</Form.Label>
                        <Form.Control as="select" name="gender" required value={formData.gender} onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
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
