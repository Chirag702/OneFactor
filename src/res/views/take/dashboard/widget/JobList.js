import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch all jobs from the API
    const fetchJobs = async () => {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                // If no token, redirect to the signup page
                setLoading(false);
                setError('No token found, please log in.');
                return;
            }

            const response = await fetch('https://api2.onefactor.in/api/jobs', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setJobs(data); // Update jobs in state
                setLoading(false); // Set loading to false
                console.log(data);
            } else {
                throw new Error(`Request failed with status: ${response.status}`);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    // useEffect to trigger API call when the component mounts
    useEffect(() => {
        fetchJobs();
    }, []);

    // Handle the loading state
    if (loading) {
        return <div>Loading jobs...</div>;
    }

    // Handle any errors that occurred during the fetch
    if (error) {
        return <div>Error: {error}</div>;
    }

    // JSX to render job listings
    return (
        <div className="jobList">
            {jobs.map((job) => (
                <div key={job.id} className="jobPost align-items-start">
                    <div className="companyIcon">
                        <img
                            src={job.companyDetails?.logoUrl || 'default-logo.png'} // Use job-specific logo or fallback
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
                            In a world where technology never stands still, we understand that dedication to our clients' success and innovation matter.
                        </p>
                    </div>
                    <div className="jobDetailButton ml-auto pr-2">
                        <Button variant="primary" className="d-none d-lg-inline">
                            Apply
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JobList;
