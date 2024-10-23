import React, { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";

const JobDetails = () => {
    const { jobId } = useParams();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0); // Current page
    const [totalPages, setTotalPages] = useState(0); // Total number of pages
    const navigate = useNavigate();

    const fetchJobById = async (jobId) => {
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
                setJobs(data.content); // Assuming the API returns { content: [...] }
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
        fetchJobById(jobId);
    }, [jobId]);

    // Handle loading state
    if (loading) {
        return <div>Loading jobs...</div>;
    }

    // Handle any errors that occurred during the fetch
    if (error) {
        return <div>Error: {error}</div>;
    }




    return (
        <>
            <NavBar />

            <div className="container-fluid d-flex justify-content-center align-items-center pt-4">
                <div className="col-lg-7 col-sm-12 bg-white">
                    {/* Right Side: Job Details */}
                    <div className="description ms-3">
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
