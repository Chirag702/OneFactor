import React, { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";

const JobDetails = () => {
    const { jobId } = useParams();
    const [jobs, setJobs] = useState(null); // Initially set to null to handle empty state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchJobById = async (jobId) => {
        setLoading(true); // Ensure loading is true while fetching data
        setError(null); // Reset error before fetching new data

        try {
            const token = localStorage.getItem('token');

            if (!token) {
                setLoading(false);
                setError('No token found, please log in.');
                return;
            }

            const response = await fetch(`https://api2.onefactor.in/api/jobs/${jobId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setJobs(data); // Assuming the API returns { content: { title, skills, description, etc. } }
            } else {
                throw new Error(`Request failed with status: ${response.status}`);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Ensure loading is set to false after fetch is complete
        }
    };

    useEffect(() => {
        if (jobId) {
            fetchJobById(jobId);
        }
    }, [jobId]); // Add jobId to dependency array to refetch if jobId changes

    // Handle loading state
    if (loading) {
        return <div>Loading jobs...</div>;
    }

    // Handle any errors that occurred during the fetch
    if (error) {
        return <div>Error: {error}</div>;
    }

    // If no job details are found
    if (!jobs) {
        return <div>No job details found.</div>;
    }

    return (
        <>
            <NavBar />
            <div className="container-fluid d-flex justify-content-center align-items-center pt-4">
                <div className="col-lg-7 col-sm-12 bg-white">
                    {/* Right Side: Job Details */}
                    <div className="description ms-3">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={jobs.companyDetails.logoUrl}
                                alt={jobs.companyDetails.companyName}
                                style={{ marginRight: '10px', width: '20px', height: '20px' }}
                            />
                            <span style={{ fontSize: '16px' }}>{jobs.companyDetails.companyName}</span>
                        </div>
                        <h3>{jobs.title}</h3>
                        <p>
                            <span className="d-none d-lg-inline">Job available in </span>Bangalore
                        </p>
                        <p>
                            <strong>Technical Skills:</strong>
                            <br />
                            • Exposure to ServiceNow administration and development of ITSM module
                            <br />
                            • Experience working with Business Process Management (BPM)
                            <br />
                            • Knowledge of ITIL framework
                            <br />
                            • Strong understanding of Java and web services
                        </p>
                        <p>
                            <strong>Job Description:</strong>
                            <br />
                            We are seeking a skilled Software Engineer to join our team. The successful candidate will be responsible for developing and maintaining software applications, working collaboratively with cross-functional teams to deliver high-quality products.
                        </p>
                        <p>
                            <strong>Responsibilities:</strong>
                        </p>
                        <ul>
                            <li>Develop and maintain software applications</li>
                            <li>Collaborate with other developers and product teams</li>
                            <li>Participate in code reviews and maintain coding standards</li>
                            <li>Test and deploy applications and systems</li>
                            <li>Revise, update, and refactor code as necessary</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;
