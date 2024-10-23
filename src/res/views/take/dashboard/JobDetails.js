import React from 'react';

function JobDetails() {
    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 flex">
            {/* Left Section */}
            <div className="w-1/3 border-r pr-4">
                {/* Logo and Company Info */}
                <div className="mb-4">
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Renderverse Logo"
                        className="w-24 h-24 mb-2 rounded-full mx-auto"
                    />
                    <h2 className="text-lg font-semibold text-center">Renderverse at a glance</h2>
                    <p className="text-center text-gray-500">Founded in 2024</p>
                    <p className="text-center text-gray-500">0 - 10 employees</p>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="text-blue-500"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-blue-500"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-blue-500"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-blue-500"><i className="fab fa-instagram"></i></a>
                </div>

                {/* InstaMatch Score */}
                <div className="bg-gradient-to-r from-yellow-400 to-pink-500 p-4 rounded-lg text-center">
                    <p className="text-white font-semibold">Your Instamatch score is High 😊</p>
                    <p className="text-white text-sm">
                        Your chances of being shortlisted for this job are high. The InstaMatch score is calculated by using a large number of data points from your profile, this company’s hiring patterns, and this recruiter’s preferences for this role.
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-2/3 pl-4">
                {/* Internship Info */}
                <h2 className="text-2xl font-semibold mb-2">Graphic Designer - Intern (Internship)</h2>
                <p className="text-gray-600">Renderverse <span className="text-gray-400">•</span> Kolkata</p>

                {/* Internship Details */}
                <div className="mt-4">
                    <p><span className="font-semibold">Start Date:</span> Immediately</p>
                    <p><span className="font-semibold">Duration:</span> 2 months</p>
                    <p><span className="font-semibold">Stipend:</span> Rs. 4,500 per month</p>
                </div>

                {/* About Renderverse */}
                <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-2">About Renderverse</h3>
                    <p className="text-gray-600">
                        At Renderverse, we transform creative visions into reality. As a full-service creative agency, we specialize in video editing, graphic design, 3D modeling, animation, UI/UX design, and web development...
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-between">
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg">Not interested</button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Apply</button>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;
