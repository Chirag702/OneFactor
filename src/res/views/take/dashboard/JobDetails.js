import React from "react";
import NavBar from "../../../components/NavBar";

const JobDetails = () => {
    return (
        <>
            <NavBar />

            <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
                <div className="col-lg-8 col-sm-12 bg-white p-4">
                    {/* Right Side: Job Details */}
                    <div className="description ms-3">
                        <h3>Software Engineer</h3>
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
