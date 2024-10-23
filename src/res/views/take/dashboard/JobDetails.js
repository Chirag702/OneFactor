import React from 'react';

function JobDetails() {
    return (
        <section id="features" className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap">
                {/* Left Panel */}
                <div id="mid-panel" className="w-full md:w-2/3 mb-4">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className="section-title">
                            <h2 className="text-2xl font-semibold">Software Engineer</h2>
                            <div className="my-4">
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <i className="icon-glyph-111 text-lg"></i>
                                        <span>1 - 3 Years</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <i className="icon-glyph-83 text-lg"></i>
                                        <span>1 Opening</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <i className="icon-glyph-14 text-lg"></i>
                                        <span>Bangalore</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="mt-6 flex space-x-4" id="btn-action">
                                <button className="btn btn-primary bg-blue-600 text-white py-2 px-4 rounded">Apply Now</button>
                                <div className="relative">
                                    <button
                                        aria-expanded="false"
                                        className="btn btn-share bg-gray-100 text-gray-700 py-2 px-4 rounded dropdown-toggle"
                                    >
                                        Share with friends
                                        <i className="icon-glyph-35 text-lg ml-2"></i>
                                    </button>
                                    <ul className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-lg py-2">
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                                <i className="fa fa-facebook-square mr-2"></i>
                                                Share on Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                                <i className="fa fa-linkedin-square mr-2"></i>
                                                Share on LinkedIn
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                                <div className="xapp-icon-svg mr-2"></div>
                                                Post on X App
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                                <i className="fa fa-envelope mr-2"></i>
                                                Email your friends
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Role Description */}
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Role description</h3>
                            <div className="mt-4 space-y-2">
                                <p>Technical Skills:</p>
                                <ul className="list-disc list-inside">
                                    <li>Exposure to ServiceNow administration and ITSM module development</li>
                                    <li>Experience with Business Rules, Client Scripts, UI Policies, UI Actions, and more</li>
                                    <li>Hands-on experience with JavaScript, HTML, XML, AJAX, and Glide scripting</li>
                                    <li>Knowledge of AngularJS and Bootstrap is an advantage</li>
                                    <li>Experience with SOAP, REST, and other integrations</li>
                                    <li>Problem-solving and logical reasoning skills</li>
                                </ul>
                            </div>

                            <h3 className="mt-6 text-xl font-semibold">Skills</h3>
                            <p>PRIMARY COMPETENCY: Tools, Service Now (51%)</p>
                            <p>SECONDARY COMPETENCY: Usability Engineering, Front-end development (49%)</p>
                        </div>
                    </div>

                    <div className="text-center bg-white rounded-lg shadow-md py-4">
                        <a href="#list" className="text-blue-600 font-semibold">View all 1724 roles</a>
                    </div>
                </div>

                {/* Right Panel */}
                <div id="side-panel" className="w-full md:w-1/3">
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-xl font-semibold">About Mphasis</h3>
                        <p className="mt-2">
                            Mphasis is a leading IT solutions provider, offering Applications, Business Process Outsourcing (BPO),
                            and Infrastructure services globally through a combination of technology and expertise...
                        </p>
                        <a href="#" className="text-blue-600 font-semibold mt-4 block">View more</a>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p>
                            Mphasis provides reasonable accommodation to applicants with disabilities. For assistance with the
                            application process, contact
                            <a href="mailto:Helpdesk.staffing@mphasis.com" className="text-blue-600"> Helpdesk.staffing@mphasis.com</a>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Action Buttons */}
            <div id="mobile-action-btn" className="fixed bottom-0 left-0 right-0 bg-white py-4 px-6 shadow-md flex justify-between">
                <button className="w-1/2 bg-blue-600 text-white py-3 rounded-lg">Apply Now</button>
                <div className="relative w-1/2">
                    <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg">Share with friends</button>
                    <ul className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-lg py-2">
                        <li>
                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                <i className="fa fa-facebook-square mr-2"></i>
                                Share on Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                <i className="fa fa-linkedin-square mr-2"></i>
                                Share on LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                <i className="fa fa-whatsapp mr-2"></i>
                                Share on WhatsApp
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                <div className="xapp-icon-svg mr-2"></div>
                                Post on X App
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                                <i className="fa fa-envelope mr-2"></i>
                                Email your friends
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default JobDetails;
