import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const JobSearchBenefits = () => {
    return (
        <Container className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 space-y-12 md:space-y-32">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                    <dt>
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                            </svg>
                        </div>
                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Accelerate your job search</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">Referrals are the fastest way to get interviews in tech, and are proven to improve your chances of landing the offer.</dd>
                </div>
                <div>
                    <dt>
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Connect with our 300+ referral network</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">Get your resume seen by an exclusive network of hundreds of Exponent members currently employed at top tech companies.</dd>
                </div>
                <div>
                    <dt>
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Get seen by employees in minutes</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">We made our referral process as smooth as possible — all you need is your resume and the job position you're interested in.</dd>
                </div>
            </dl>
        </Container>
    );
};

export default JobSearchBenefits;
