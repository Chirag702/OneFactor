import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0); // Current page
    const [totalPages, setTotalPages] = useState(0); // Total number of pages

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
        <div className="jobList">
            {jobs.map((job) => (
                <div key={job.id} className="jobPost align-items-start">
                    <div className="companyIcon">
                        <img
                            src={job.companyDetails?.logoUrl || 'default-logo.png'}
                            alt="company logo"
                            className="img-fluid"
                            style={{ maxWidth: "100px" }}
                        />
                    </div>
                    <div className="description">
                        <h3>{job.title}</h3>
                        <p>
                            <span className="d-none d-lg-inline">Job available in </span>
                            {job.location || 'N/A'}
                        </p>
                        <p className="d-none d-lg-inline">
                            {job.description.length > 120 ? job.description.substring(0, 120) + '...' : job.description}
                        </p>
                    </div>
                    <div className="jobDetailButton ml-auto pr-2">
                        <Button onClick={() => window.open(job.applicationLink, '_blank')} variant="primary" className="d-none d-lg-inline">
                            Apply
                        </Button>
                    </div>
                </div>
            ))}
            <div className="pagination" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                {createPagination()}
            </div>

        </div>
    );
};

export default JobList;
