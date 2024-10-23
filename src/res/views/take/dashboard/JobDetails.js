import React from "react";

const JobDescription = () => {
    return (
        <div className="container mt-5">
            <div className="row bg-light p-4 shadow rounded">
                {/* Job Details Column */}
                <div className="col-md-6 mb-4">
                    <h2 className="mb-3">Full Stack Engineer 3</h2>
                    <p><strong>Position:</strong> Full-time | IT | Bangalore</p>
                    <p><strong>Posted on:</strong> 2024-08-21</p>
                    <p><strong>Technologies:</strong> Java, Spring Boot, Rest API, Docker, Kubernetes</p>
                    <p><strong>Experience Level:</strong> Senior</p>
                    <p>
                        We are looking for a full-stack engineer with experience in Java, Spring Boot, and Docker.
                        You will be working with cutting-edge technologies to deliver high-quality software solutions.
                    </p>
                    <div className="btn-group">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>

                {/* Company Details Column */}
                <div className="col-md-6">
                    <h3 className="mb-3">Mphasis</h3>
                    <p><strong>Industry:</strong> IT Services and IT Consulting</p>
                    <p><strong>Employees:</strong> 10,001+</p>
                    <p><strong>Location:</strong> Bangalore, Karnataka</p>
                    <p>
                        A leading applied technology services company with a focus on IT services and consulting,
                        delivering innovative solutions to clients worldwide.
                    </p>
                    {/* Company Logo */}
                    <div className="mb-3">
                        <img
                            src="https://media.licdn.com/dms/image/v2/C4D0BAQGA6s2g..."
                            alt="Mphasis Logo"
                            className="img-fluid rounded"
                            style={{ width: "100px", height: "100px" }}
                        />
                    </div>
                    <a
                        href="https://www.mphasis.com/"
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
