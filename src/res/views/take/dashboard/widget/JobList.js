import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0); // Current page
    const [totalPages, setTotalPages] = useState(0); // Total number of pages
    const navigate = useNavigate();
    const [showFilters, setShowFilters] = useState(false); // State for filter visibility

    const toggleFilters = () => {
        setShowFilters(prev => !prev); // Toggle filter visibility
    };

    // Function to fetch jobs from the API with pagination
    const fetchJobs = async (pageNumber) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                setLoading(false);
                setError('No token found, please log in.');
                return;
            }

            const response = await fetch(`https://api2.onefactor.in/api/jobs?page=${pageNumber}&size=10`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setJobs(data.content); // Assuming the API returns { content: [...] }
                setTotalPages(data.totalPages); // Set total pages from the response
                setLoading(false);
            } else {
                throw new Error(`Request failed with status: ${response.status}`);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    // useEffect to trigger API call when the component mounts or page changes
    useEffect(() => {
        fetchJobs(page);
    }, [page]);

    // Handle loading state
    if (loading) {
        return <div>Loading jobs...</div>;
    }

    // Handle any errors that occurred during the fetch
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Pagination logic
    const createPagination = () => {
        const pagination = [];
        const maxVisiblePages = 10;

        for (let i = 0; i < totalPages; i++) {
            if (i < maxVisiblePages) {
                pagination.push(
                    <Button
                        key={i}
                        onClick={() => setPage(i)}
                        disabled={i === page}
                        variant={i === page ? "primary" : "secondary"}
                    >
                        {i + 1}
                    </Button>
                );
            } else if (i === maxVisiblePages && page < totalPages - maxVisiblePages) {
                pagination.push(<span key="ellipsis">...</span>);
            }
        }
        return pagination;
    };

    // JSX to render job listings
    return (
        <>  {/* Row inside Col for text and filter button */}
            <Row className="align-items-center justify-content-between d-lg-none">
                {/* Left Side Text */}
                <Col xs="auto">
                    <span>10 of 10000</span>
                </Col>

                {/* Right Side Filter Button for Small Screens */}
                <Col xs="auto">
                    <Button
                        className="d-lg-none" // Only show on small screens
                        onClick={toggleFilters}
                        variant="link" // Use 'link' variant to remove border
                        style={{ padding: 0 }} // Remove default padding
                    >
                        <FaFilter size={16} color='black' /> {/* Icon only */}
                    </Button>
                </Col>
            </Row>

            <div className="jobList">
                {jobs.map((job) => (
                    <div key={job.id} className="jobPost d-flex align-items-start p-3 border rounded mb-3">
                        {/* Company Icon */}
                        <div className="companyIcon me-3">
                            <img
                                src={job.companyDetails?.logoUrl || 'default-logo.png'}
                                alt="company logo"
                                className="img-fluid"
                                style={{ maxWidth: "80px" }}
                            />
                        </div>

                        {/* Job Description */}
                        <div className="description flex-grow-1">
                            <h3 className="mb-1">{job.title}</h3>
                            <p className="mb-1 text-muted">
                                <span className="d-none d-lg-inline">Job available in </span>
                                {job.location || 'N/A'}
                            </p>   <p className="d-inline">
                                {job.description.length > 120 ? job.description.substring(0, 120) + '...' : job.description}
                            </p>
                        </div>

                        {/* Apply Button for Large Screens */}
                        <div className="jobDetailButton ms-auto">
                            <Button
                                onClick={() => navigate(`/job/details/${job.id}`)}
                                variant="primary"
                                className="d-block"
                            >
                                Apply
                            </Button>

                            {/* Link for Small Screens */}
                        </div>
                    </div>
                ))}
                <div className="pagination" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                    {createPagination()}
                </div>
            </div>
            <Modal show={showFilters} onHide={toggleFilters} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Filter Jobs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleFilters}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={toggleFilters}>
                        Apply Filters
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default JobList;
