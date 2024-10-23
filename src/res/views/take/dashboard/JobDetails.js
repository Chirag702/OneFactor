import React from "react";

const JobDetails = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-md">
                <div className="flex flex-col md:flex-row justify-between">

                    {/* Job Details Column */}
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-2xl font-semibold mb-4">Full Stack Engineer 3</h2>
                        <p className="text-gray-600 mb-2">Full-time | IT | Bangalore</p>
                        <p className="text-gray-600 mb-2">Posted on: 2024-08-21</p>
                        <p className="text-gray-600 mb-2">Technologies: Java, Spring Boot, Rest API, Docker, Kubernetes</p>
                        <p className="text-gray-600 mb-4">Experience: Senior</p>
                        <p className="text-gray-600 mb-4">
                            We are looking for a full-stack engineer with experience in Java, Spring Boot, and Docker. You will be working with cutting-edge technologies to deliver high-quality software solutions.
                        </p>

                        <div className="flex space-x-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded">Edit</button>
                            <button className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
                        </div>
                    </div>

                    {/* Company Details Column */}
                    <div className="w-full md:w-1/2 p-4">
                        <h3 className="text-xl font-semibold mb-4">Mphasis</h3>
                        <p className="text-gray-600 mb-2">Industry: IT Services and IT Consulting Services</p>
                        <p className="text-gray-600 mb-2">Employees: 10,001+</p>
                        <p className="text-gray-600 mb-4">Location: Bangalore, Karnataka</p>
                        <p className="text-gray-600 mb-4">
                            A leading applied technology services company with a focus on IT services and consulting, delivering innovative solutions to clients worldwide.
                        </p>

                        {/* Company Logo */}
                        <div className="mb-4">
                            <img
                                src="https://media.licdn.com/dms/image/v2/C4D0BAQGA6s2g..."
                                alt="Mphasis Logo"
                                className="w-24 h-24 object-cover rounded-md"
                            />
                        </div>

                        <a
                            href="https://www.mphasis.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            Visit Company Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
