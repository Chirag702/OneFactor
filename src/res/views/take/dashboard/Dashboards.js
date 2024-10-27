import React, { useState } from 'react';
import NavBar from '../../../components/NavBar';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import JobList from './widget/JobList';
import { FaFilter } from 'react-icons/fa'; // Import an icon from react-icons

function Dashboards() {
    const [showFilters, setShowFilters] = useState(false); // State for filter visibility

    const toggleFilters = () => {
        setShowFilters(prev => !prev); // Toggle filter visibility
    };

    return (
        <>
            <Helmet>
                <title>Jobs | OneFactor</title>
            </Helmet>
            <NavBar />

            <Container fluid className='container'>
                <Row>
                    {/* Filters Section */}
                    <Col lg={4} className="p-lg-1 filterAndAdds order-lg-1 order-1">
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
                    </Col>

                    {/* Jobs Section */}
                    {/* Jobs Section */}
                    <Col lg={8} id="availableJobs" className="mt-4 order-lg-2 order-2">

                        {/* Job List Component */}
                        <JobList />
                    </Col>

                </Row>
            </Container>

            {/* Full-Screen Filter Modal */}
        </>
    );
}

export default Dashboards;
