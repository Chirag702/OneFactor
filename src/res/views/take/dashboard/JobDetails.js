import React from "react";

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
        <div className="container mt-5" style={{ backgroundColor: "white" }}>
            <div className="row">
                {/* Job Details Column */}
                <div className="col-md-6 mb-4">
                    <h2 className="mb-3">{jobDetails.position}</h2>
                    <p>
                        <strong>Position:</strong> {jobDetails.type} | {jobDetails.industry} | {jobDetails.location}
                    </p>
                    <p><strong>Posted on:</strong> {jobDetails.postedOn}</p>
                    <p>
                        <strong>Technologies:</strong> {jobDetails.technologies.join(", ")}
                    </p>
                    <p><strong>Experience Level:</strong> {jobDetails.experienceLevel}</p>
                    <p>{jobDetails.description}</p>
                    <div className="btn-group">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>

                {/* Company Details Column */}
                <div className="col-md-6">
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
    );
};

export default JobDetails;
