import React from 'react'
import NavBar from '../../components/NavBar'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate = useNavigate();
    return (
        <>
            <NavBar />
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <div className="empty">
                            <div className="empty-img">
                                <img src="..." height="128" alt="" />
                            </div>
                            <h5 className="empty-title">Application Submission Confirmation</h5>
                            <p className="empty-subtitle text-secondary">
                                Thank you for your submission! We are currently reviewing your application, and our team will reach out if any further information is required. Please check your email for updates.
                            </p>
                            <div className="empty-action">
                                <Button variant="primary" onClick={() => { navigate("/home") }}>

                                    Explore Jobs
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Success