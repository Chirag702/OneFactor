import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const jobListings = [
    {
        title: 'Software Engineer',
        company: 'MizTech',
        location: 'New York',
        user: 'John Smith',
        logo: 'assets/img/features/img1.png',
        type: 'Full Time',
    },
    {
        title: 'Graphic Designer',
        company: 'Hunter Inc.',
        location: 'New York',
        user: 'John Smith',
        logo: 'assets/img/features/img2.png',
        type: 'Part Time',
    },
    {
        title: 'Managing Director',
        company: 'MagNews',
        location: 'New York',
        user: 'John Smith',
        logo: 'assets/img/features/img3.png',
        type: 'Part Time',
    },
    {
        title: 'Software Engineer',
        company: 'AmazeSoft',
        location: 'New York',
        user: 'John Smith',
        logo: 'assets/img/features/img4.png',
        type: 'Full Time',
    },
    {
        title: 'Graphic Designer',
        company: 'Bingo',
        location: 'New York',
        user: 'John Smith',
        logo: 'assets/img/features/img5.png',
        type: 'Full Time',
    },
    {
        title: 'Managing Director',
        company: 'MagNews',
        location: 'New York',
        user: 'John Smith',
        logo: 'assets/img/features/img6.png',
        type: 'Part Time',
    },
];

const FeaturedJobs = () => {
    return (
        <section id="job-listings" className="section">
            <Container>
                <div className="section-header">
                    <h2 className="section-title">Featured Jobs</h2>
                    <p>Hand-picked jobs featured depending on popularity and benefits</p>
                </div>
                <Row>
                    {jobListings.map((job, index) => (
                        <Col lg={6} md={12} xs={12} key={index}>
                            <a className="job-listings-featured" href="job-details.html">
                                <Row>
                                    <Col lg={6} md={6} xs={12}>
                                        <div className="job-company-logo">
                                            <img src={job.logo} alt={job.title} />
                                        </div>
                                        <div className="job-details">
                                            <h3>{job.title}</h3>
                                            <span className="company-name">{job.company}</span>
                                            <div className="tags">
                                                <span><i className="lni-map-marker"></i> {job.location}</span>
                                                <span><i className="lni-user"></i> {job.user}</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} xs={12} className="text-right">
                                        <div className="tag-type">
                                            <span className="heart-icon">
                                                <i className="lni-heart"></i>
                                            </span>
                                            <span className={job.type === 'Full Time' ? 'full-time' : 'part-time'}>{job.type}</span>
                                        </div>
                                    </Col>
                                </Row>
                            </a>
                        </Col>
                    ))}
                    <Col xs={12} className="text-center mt-4">
                        <Button href="job-page.html" className="btn btn-common">Browse All Jobs</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FeaturedJobs;
