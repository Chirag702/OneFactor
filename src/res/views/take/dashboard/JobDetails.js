import React, { useEffect, useState } from "react";
import NavBar from "../../../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";

const JobDetails = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null); // Initially set to null to handle empty state
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
                setJob(data); // Assuming the API returns { content: { title, skills, description, etc. } }
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
    if (!job) {
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
                                src={job.companyDetails.logoUrl}
                                alt={job.companyDetails.companyName}
                                style={{ marginRight: '10px', width: '20px', height: '20px' }}
                            />
                            <span style={{ fontSize: '16px' }}>{job.companyDetails.companyName}</span>
                        </div>
                        <h3>{job.title}</h3>
                        <p>
                            <span className="d-none d-lg-inline">Job available in </span>{job.location}
                        </p>
                        <div style={{ padding: '20px' }}>
                            <h3>{job.title}</h3>
                            <p><strong>Location:</strong> {job.location}</p>
                            <p><strong>Posted Date:</strong> {job.postedDate}</p>
                            <p><strong>Employment Type:</strong> {job.employmentType}</p>
                            <p><strong>Industry:</strong> {job.industry}</p>
                            <p><strong>Seniority Level:</strong> {job.seniorityLevel}</p>
                            <p><strong>Salary Range:</strong> {job.salaryRange}</p>

                            <h4>Technical Skills:</h4>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                {job.description.split(/\n•|\n-/).slice(1).map((skill, index) => (
                                    <li key={index}><p>{skill.trim()}</p></li>
                                ))}
                            </ul>


                            <p><strong>Requirements:</strong> {job.requirements}</p>

                            <h4>Company Details:</h4>
                            <div>
                                <img src={job.companyDetails.logoUrl} alt={job.companyDetails.companyName} style={{ width: '100px', marginBottom: '10px' }} />
                                <p><strong>Company Name:</strong> {job.companyDetails.companyName}</p>
                                <p><strong>Description:</strong> {job.companyDetails.companyDescription}</p>
                                <p><strong>Industry:</strong> {job.companyDetails.industry}</p>
                                <p><strong>Company Size:</strong> {job.companyDetails.companySize}</p>
                                <p><strong>Website:</strong> <a href={job.companyDetails.websiteUrl} target="_blank" rel="noopener noreferrer">{job.companyDetails.websiteUrl}</a></p>
                            </div>

                            <h4>Benefits:</h4>
                            <p>{job.benefits}</p>



                            <a href={job.applicationLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;
