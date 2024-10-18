import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const JobSearch = () => {
    return (
        <Container>
            <Row className="space-100 justify-content-center">
                <Col lg={10} md={12} xs={12}>
                    <div className="contents">
                        <h2 className="head-title">Find the job that fits your life</h2>
                        <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, <br /> id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non.</p>
                        <div className="job-search-form">
                            <Form>
                                <Row>
                                    <Col lg={5} md={6} xs={12}>
                                        <Form.Group>
                                            <Form.Control type="text" placeholder="Job Title or Company Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={6} xs={12}>
                                        <Form.Group>
                                            <Form.Control as="select">
                                                <option value="none">Locations</option>
                                                <option value="new-york">New York</option>
                                                <option value="california">California</option>
                                                <option value="washington">Washington</option>
                                                <option value="birmingham">Birmingham</option>
                                                <option value="chicago">Chicago</option>
                                                <option value="phoenix">Phoenix</option>
                                            </Form.Control>
                                            <i className="lni-map-marker"></i>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={6} xs={12}>
                                        <Form.Group>
                                            <Form.Control as="select">
                                                <option>All Categories</option>
                                                <option>Finance</option>
                                                <option>IT & Engineering</option>
                                                <option>Education/Training</option>
                                                <option>Art/Design</option>
                                                <option>Sale/Marketing</option>
                                                <option>Healthcare</option>
                                                <option>Science</option>
                                                <option>Food Services</option>
                                            </Form.Control>
                                            <i className="lni-layers"></i>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={1} md={6} xs={12}>
                                        <Button type="submit" className="button">
                                            <i className="lni-search"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default JobSearch;
