import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HowItWorks = () => {
    return (
        <section className="how-it-works section">
            <Container>
                <div className="section-header">
                    <h2 className="section-title">How It Works?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim quam et <br /> metus efficitur ac fringilla lorem facilisis.</p>
                </div>
                <Row>
                    <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="work-process">
                            <span className="process-icon">
                                <i className="lni-user"></i>
                            </span>
                            <h4>Accelerate your job <br />search
                            </h4>
                            <p>
                                Referrals are the fastest way to get interviews in tech, and are proven to improve your chances of landing the offer.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="work-process step-2">
                            <span className="process-icon">
                                <i className="lni-search"></i>
                            </span>
                            <h4>Connect with our 300+ referrers network</h4>



                            <p>Get your resume seen by an exclusive network of hundreds of Exponent members currently employed at top tech companies.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={12}>
                        <div className="work-process step-3">
                            <span className="process-icon">
                                <i className="lni-cup"></i>
                            </span>


                            <h4>                            Get seen by employees in minutes
                            </h4>
                            <p>We made our referral process as smooth as possible — all you need is your resume and the job position you're interested in.
                            </p>                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HowItWorks;
