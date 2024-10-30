import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import NavBar from '../../../components/NavBar';
import DiversityInfo from './widget/DiversityInfo';
import JobPreference from './widget/JobPreference';
import SkillInfo from './widget/SkillInfo';
import EducationInfo from './widget/EducationInfo';
import { Link } from 'react-router-dom';

function Profile() {
    const [loading, setLoading] = useState(true);
    const [isFresher, setIsFresher] = useState(true); // Mocked for demo, replace with actual data check
    const candidate = true; // Mocked candidate check, replace as needed

    // Simulate loading
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000); // Simulates a delay for loading
    }, []);

    return (
        <><NavBar />
            <Container className='mt-4'>
                <Row>
                    {/* Profile Left Column */}
                    <Col md={8} xs={12}>
                        {loading ? (
                            <div className="text-center">
                                <h4>Hold on, loading page...</h4>
                                <Spinner animation="border" style={{ fontSize: '2em' }} />
                            </div>
                        ) : (

                            <div>
                                {isFresher && (
                                    <div id="fresher-select" className="profile-block p-4">
                                        {candidate && (
                                            <>
                                                <div className="profile-content profile-editor-opened">
                                                    <span>
                                                        <strong>
                                                            No longer a student or fresher?{' '}
                                                            <Link to="/r/candidate/onboarding/">Update your profile type</Link>
                                                        </strong>.
                                                    </span>
                                                </div>
                                                <JobPreference />
                                                <SkillInfo />
                                                <EducationInfo />
                                                <DiversityInfo />
                                            </>

                                        )}

                                    </div>
                                )}

                            </div>


                        )}
                    </Col>

                    {/* Sidebar can be added here if needed */}
                </Row>
            </Container >
        </>
    );
}

export default Profile;
