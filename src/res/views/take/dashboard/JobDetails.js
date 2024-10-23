import React from "react";
import NavBar from "../../../components/NavBar";

const JobDetails = () => {
    return (
        <>
            <NavBar />

            <div className="container-fluid container">
                <div className="row d-flex align-items-start">
                    {/* Left Side: Company Details */}
                    <div className="col-md-4 col-lg-3 filterAndAdds bg-light p-3">
                        <div className="filter-section">
                            <h4>Quick tip</h4>
                            <p>
                                Since not all companies will go ahead, we encourage you to apply to several companies.
                            </p>
                            <p>
                                However, avoid applying if you don't want to interview, as any interview backouts will be shown to other companies!
                            </p>
                        </div>
                    </div>



                    {/* Right Side: Job Details */}
                    <div className="col-md-8 col-lg-9 filterAndAdds bg-light p-3">
                        <div>
                            <div className="bg-tex mb-3">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;
