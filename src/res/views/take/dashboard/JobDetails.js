import React from "react";
import NavBar from "../../../components/NavBar";

const JobDetails = () => {
    // Job details constant
    const jobDetails = {
        position: "Full Stack Engineer 3",
        type: "Full-time",
        industry: "IT",
        location: "Bangalore",
        postedOn: "2024-08-21",
        technologies: ["Java", "Spring Boot", "Rest API", "Docker", "Kubernetes"],
        experienceLevel: "Senior",
        description:
            "We are looking for a full-stack engineer with experience in Java, Spring Boot, and Docker. You will be working with cutting-edge technologies to deliver high-quality software solutions.",
        company: {
            name: "Mphasis",
            industry: "IT Services and IT Consulting",
            employees: "10,001+",
            location: "Bangalore, Karnataka",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGA6s2g...",
            website: "https://www.mphasis.com/",
            about:
                "A leading applied technology services company with a focus on IT services and consulting, delivering innovative solutions to clients worldwide.",
        },
    };

    return (
        <>

            <NavBar />
            <div className="container mt-5" style={{ backgroundColor: "white" }}>
                <div className="row">
                    {/* Job Details Column */}
                    <div className="col-xl-7 col-lg-8">
                        {/* Job Single */}
                        <div className="single-job-items mb-50">
                            <div className="job-items">
                                <div className="company-img company-img-details">
                                    <a href="#">
                                        <img src="assets/img/icon/job-list1.png" alt="Company Logo" />
                                    </a>
                                </div>
                                <div className="job-tittle">
                                    <a href="#">
                                        <h4>Digital Marketer</h4>
                                    </a>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i>Athens, Greece
                                        </li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Job Single End */}

                        <div className="job-post-details">
                            <div className="post-details1 mb-50">
                                {/* Small Section Title */}
                                <div className="small-section-tittle">
                                    <h4>Job Description</h4>
                                </div>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using content here, making it look like readable English.
                                </p>
                            </div>
                            <div className="post-details2 mb-50">
                                {/* Small Section Title */}
                                <div className="small-section-tittle">
                                    <h4>Required Knowledge, Skills, and Abilities</h4>
                                </div>
                                <ul>
                                    <li>System Software Development</li>
                                    <li>Mobile Application in iOS/Android/Tizen or other platforms</li>
                                    <li>Research and code libraries, APIs, and frameworks</li>
                                    <li>Strong knowledge of software development life cycle</li>
                                    <li>Strong problem-solving and debugging skills</li>
                                </ul>
                            </div>
                            <div className="post-details2 mb-50">
                                {/* Small Section Title */}
                                <div className="small-section-tittle">
                                    <h4>Education + Experience</h4>
                                </div>
                                <ul>
                                    <li>3 or more years of professional design experience</li>
                                    <li>Direct response email experience</li>
                                    <li>Ecommerce website design experience</li>
                                    <li>Familiarity with mobile and web apps preferred</li>
                                    <li>Experience using Invision a plus</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Company Details Column */}
                    <div className="col-md-5">
                        <h3 className="mb-3">{jobDetails.company.name}</h3>
                        <p><strong>Industry:</strong> {jobDetails.company.industry}</p>
                        <p><strong>Employees:</strong> {jobDetails.company.employees}</p>
                        <p><strong>Location:</strong> {jobDetails.company.location}</p>
                        <p>{jobDetails.company.about}</p>
                        {/* Company Logo */}
                        <div className="mb-3">
                            <img
                                src={jobDetails.company.logo}
                                alt={`${jobDetails.company.name} Logo`}
                                className="img-fluid rounded"
                                style={{ width: "100px", height: "100px" }}
                            />
                        </div>
                        <a
                            href={jobDetails.company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-link"
                        >
                            Visit Company Website
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;
