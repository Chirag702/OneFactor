import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { FaFilter, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const navigate = useNavigate();
    const [showFilters, setShowFilters] = useState(false);
    const [jobDetails, showJobDetails] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [selectedJobEmployer, setSelectedJobEmployer] = useState(null);

    const toggleFilters = () => {
        setShowFilters(prev => !prev);
    };

    const toggleJobDetails = (job = null, employer = null) => {
        setSelectedJobEmployer(employer);
        setSelectedJob(job); // Set the selected job
        showJobDetails(prev => !prev);
    };

    const fetchJobs = async (pageNumber) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                setLoading(false);
                setError('No token found, please log in.');
                return;
            }

            const response = await fetch(`http://onefactor.in:8082/api/v1/job?page=${pageNumber}&size=10`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setJobs(data.content);
                setTotalPages(data.totalPages);
                setTotalElements(data.totalElements);
                setLoading(false);
            } else {
                throw new Error(`Request failed with status: ${response.status}`);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs(page);
    }, [page]);

    if (loading) return <div>Loading jobs...</div>;
    if (error) return <div>Error: {error}</div>;

    const createPagination = () => {
        const pagination = [];
        const maxVisiblePages = 10;

        for (let i = 0; i < totalPages; i++) {
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
            if (i >= maxVisiblePages && page < totalPages - maxVisiblePages) {
                pagination.push(<span key="ellipsis">...</span>);
                break;
            }
        }
        return pagination;
    };

    return (
        <>
            <Row className="align-items-center justify-content-between d-lg-none mt-4">
                <Col xs="auto">
                    <span>{jobs.length} of {totalElements}</span>
                </Col>
                <Col xs="auto">
                    <Button
                        className="d-lg-none"
                        onClick={toggleFilters}
                        variant="link"
                        style={{ padding: 10 }}
                    >
                        <FaFilter size={16} color='black' />
                    </Button>
                </Col>
            </Row>

            <div className="mt-4">
                {jobs.map((jobData) => {
                    const { job, employer } = jobData;
                    return (
                        <div key={job.id} className="mb-2 bg-white d-flex align-items-start pt-3 pl-3 pr-3 border rounded">
                            <div className="companyIcon me-3">
                                <img
                                    src={employer?.profileImageSrc || 'default-logo.png'}
                                    alt="company logo"
                                    className="img-fluid"
                                    style={{ maxWidth: "120px" }}
                                />
                            </div>
                            <div className="flex-grow-1">
                                <Link
                                    onClick={() => toggleJobDetails(job, employer)} // Pass the job data to modal
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <h3 className="mb-1">{job.title}</h3>
                                    <p className="mb-1 text-muted">
                                        <span className="d-none d-lg-inline">Job available in </span>
                                        {job.locations || 'N/A'}
                                    </p>
                                    <p>
                                        {job.description?.length > 120
                                            ? job.description.substring(0, 120) + '...'
                                            : job.description || 'No description available.'}
                                    </p>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0 }}>
                                        {job.keywords.map((skill, index) => (
                                            <li
                                                key={index}
                                                style={{
                                                    marginTop: '10px',
                                                    marginRight: '10px',
                                                    padding: '5px 15px',
                                                    backgroundColor: '#f8d7da',
                                                    color: '#721c24',
                                                    borderRadius: '5px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                {skill}
                                            </li>

                                        ))}
                                    </ul>
                                </Link>
                            </div>

                            <div className="jobDetailButton ms-auto">
                                <Button

                                    onClick={() => toggleJobDetails(job, employer)} // Pass the job data to modal
                                    variant="primary"
                                    className="d-lg-block d-none"
                                >
                                    Apply
                                </Button>
                            </div>
                        </div>
                    );
                })}
                <div className="pagination" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                    {createPagination()}
                </div>
            </div>
            <Modal show={jobDetails} onHide={() => toggleJobDetails(null)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Job Details</Modal.Title>
                </Modal.Header>

                {/* Scrollable Body */}
                <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                    {selectedJob && selectedJobEmployer ? (
                        <>
                            <Container className="profile-heading posted-by-middle">
                                <Row className="profile-info mb-3 justify-content-between align-items-center">
                                    <Col>
                                        <h3 className="ng-binding">
                                            {selectedJob.title}
                                            {selectedJob.internship ? " - Intern (Internship)" : ""}
                                        </h3>
                                        <h4 className="company-name ng-binding">{selectedJob.hiringCompanyName}</h4>
                                        <div className="job-locations">
                                            <span className="ng-binding">
                                                <FaMapMarkerAlt aria-hidden="true" /> {selectedJob.locations}
                                            </span>
                                        </div>
                                    </Col>

                                    {/* Recruiter Info */}

                                </Row>

                                {/* About Company Section */}
                                <Container id="employer-summary" className="profile-block mt-3">
                                    <Row>
                                        <Col>
                                            <h5 className="profile-block-heading">About {selectedJob.hiringCompanyName}</h5>
                                            <div className="profile-content">
                                                <p className="quill-formatted">
                                                    {selectedJobEmployer.note || 'No company information available.'}
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Container>

                            <Container id="job-description" className="profile-block">
                                {/* Job Title */}
                                <h5 className="profile-block-heading">
                                    Job Description
                                </h5>

                                {/* Job Function */}
                                <div className="entries short-paragraph">
                                    <div className="entry">
                                        <div>
                                            {/* {job.job_function_dict?.map((value, index) => (
                                                <span key={index} className="ng-binding">
                                                    {value}
                                                    <span className="elevate-up"> → </span>
                                                </span>
                                            ))} */}
                                        </div>
                                    </div>
                                </div>

                                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0 }}>
                                    {selectedJob.keywords.map((skill, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                marginTop: '10px',
                                                marginRight: '10px',
                                                padding: '5px 10px',
                                                backgroundColor: '#f8d7da',
                                                color: '#721c24',
                                                borderRadius: '5px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: "12px"
                                            }}
                                        >
                                            {skill}

                                        </li>

                                    ))}
                                </ul>
                                <div className="profile-content">
                                    <p className="quill-formatted">
                                        {selectedJob.description || 'No company information available.'}
                                    </p>
                                </div>


                                {/* Job Description Section with Scrollable Container */}
                                < div className="profile-content job-description" >
                                    <h5 className="profile-block-heading">
                                        Job Responsiblities
                                    </h5>                                    <p className="quill-formatted">
                                        {selectedJob.responsibilities ?? " "}
                                    </p>

                                    <h5 className="profile-block-heading">
                                        Job Requirements
                                    </h5>

                                    <p className="quill-formatted">
                                        {selectedJob.requirements ?? " "}

                                    </p>


                                </div>
                            </Container>

                        </>
                    ) : (
                        <p>No job details available.</p>
                    )}
                </Modal.Body>

                {selectedJob && <Modal.Footer>
                    <Link onClick={() => toggleJobDetails(null)} style={{ color: "grey" }}>
                        Not Interested
                    </Link>
                    <a href={selectedJob.opportunityUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Apply Now
                    </a>

                </Modal.Footer>
                }

            </Modal >
        </>
    );
};

export default JobList;
