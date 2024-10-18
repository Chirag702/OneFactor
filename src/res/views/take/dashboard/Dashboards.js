import React from 'react';
import NavBar from '../../../components/NavBar';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import JobList from './widget/JobList';

function Dashboards() {
    return (
        <>
            <NavBar />

            <Container fluid className='container'>
                <Row>
                    {/* Filters Section */}
                    <Col lg={4} className="filterAndAdds  p-1 order-lg-1 order-2">
                        <div className="filter-section">

                            <h4>Quick tip</h4>
                            <p>
                                Since not all companies will go ahead, we encourage you to apply
                                to several companies.
                            </p>
                            <p>
                                However, avoid applying if you don't want to interview, as any
                                interview backouts will be shown to other companies!
                            </p>
                        </div>
                        <div className="filter-section mt-2 p-4" >
                            <Form.Label>Job type</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                            <br />
                            <Form.Label>Job type</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                        </div>


                    </Col>

                    {/* Jobs Section */}
                    <Col lg={8} id="availableJobs" className="mt-4 order-lg-2 order-1">
                        <JobList />

                        {/* Other job posts can follow in a similar way */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboards;
