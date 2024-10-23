import React from "react";
import NavBar from "../../../components/NavBar";

const JobDetails = () => {
    return (
        <>
            <NavBar />
            <div className="container container-fluid">
                <div className="row">
                    {/* Left Side: Company Details */}
                    <div className="filterAndAdds p-3 order-lg-1 order-2 col-lg-4 bg-light">
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
                    <div id="availableJobs" className="mt-4 order-lg-2 order-1 col-lg-8">
                        <div className="jobList">
                            <div className="jobPost align-items-start border p-3 mb-3">
                                <div className="companyIcon">
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/C4D0BAQGA6s2gCDu-MA/company-logo_200_200/company-logo_200_200/0/1630508225160/mphasis_logo?e=1737590400&amp;v=beta&amp;t=WqYBITVje9-fcZnDhvGSa5Rr9eIqkqVzu7MFT3MuefM"
                                        alt="company logo"
                                        className="img-fluid"
                                        style={{ maxWidth: "100px" }}
                                    />
                                </div>
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
                                        <ul>
                                            <li>Develop and maintain software applications</li>
                                            <li>Collaborate with other developers and product teams</li>
                                            <li>Participate in code reviews and maintain coding standards</li>
                                            <li>Test and deploy applications and systems</li>
                                            <li>Revise, update, and refactor code as necessary</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="jobDetailButton ms-auto">
                                    <button type="button" className="btn btn-primary">
                                        Apply
                                    </button>
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
