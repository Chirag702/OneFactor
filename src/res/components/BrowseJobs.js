
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BrowseJobs = () => {
    return (
        <div id="browse-jobs" className="section bg-white">
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div className="text-wrapper">
                            <div>
                                <h3>7,000+ Browse Jobs</h3>
                                <p>
                                    Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.
                                </p>
                                <Button className="btn btn-common" href="#">Search jobs</Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className="img-thumb">
                            <img className="img-fluid" src="assets/img/search.png" alt="Search jobs" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BrowseJobs;
