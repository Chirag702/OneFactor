import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function JobPreference() {
    const [isEditing, setIsEditing] = useState(false);
    const [currentLocation, setCurrentLocation] = useState("Ahmedabad");
    const [locationPreferences, setLocationPreferences] = useState("Anywhere in India");
    const [isFresher, setIsFresher] = useState(true);
    const [fresherSalary, setFresherSalary] = useState(50); // Salary in LPA
    const [noticePeriod, setNoticePeriod] = useState(0);
    const [showSalaryModal, setShowSalaryModal] = useState(false);
    const [currentSalary, setCurrentSalary] = useState(0);

    const handleSaveChanges = () => {
        setIsEditing(false);
    };

    const handleCancelChanges = () => {
        setIsEditing(false);
    };

    const handleConfirmSalary = () => {
        setShowSalaryModal(false);
    };

    return (
        <div id="job-preferences" className="profile-block mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <span><strong>Job Preferences</strong></span>
                <div className="profile-editor-closed">
                    <Link>
                        <i className="fa fa-pencil"></i> Edit
                    </Link>
                </div>

            </div>
            <hr style={{ marginTop: '10px', marginBottom: '10px' }} />

            {!isEditing ? (
                <div className="profile-editor-closed">
                    <div className="profile-content short-paragraph">
                        {currentLocation && (
                            <>  Currently located in <strong>Bangalore</strong></>
                        )}<br />

                        Only willing to work in <strong>Bangalore</strong><br />

                        {isFresher && fresherSalary && (
                            <>Minimum salary <strong>Rs. {fresherSalary} LPA</strong></>
                        )}<br />
                        {noticePeriod === 0 && (
                            <>Can start working <strong>immediately</strong></>
                        )}<br />
                    </div>

                </div>
            ) : (
                <div className="profile-editor-opened">
                    <Form>
                        <Form.Group controlId="currentSalary">
                            <Form.Label>What is the minimum salary you will consider?</Form.Label>
                            <div className="input-group">
                                <span className="input-group-text">Rs.</span>
                                <Form.Control
                                    type="number"
                                    min="0"
                                    step="0.1"
                                    value={currentSalary}
                                    onChange={(e) => setCurrentSalary(parseFloat(e.target.value))}
                                    placeholder="e.g. 12.5"
                                />
                                <span className="input-group-text">LPA</span>
                            </div>
                            <Form.Text className="text-muted">
                                {`You've entered Rs. ${currentSalary || 0} LPA`}
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" onClick={handleSaveChanges} className="save">Save Changes</Button>
                        <Button variant="secondary" onClick={handleCancelChanges} className="cancel">Cancel</Button>
                    </Form>
                </div>
            )}

            <Modal show={showSalaryModal} onHide={() => setShowSalaryModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm your salary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        It seems you may have entered an incorrect current salary. Please correct it below if so, since entering an incorrect value will result in your profile being matched with irrelevant jobs.
                        In case you are not working currently, or are working at a non-salaried role, please enter your expected salary.
                    </p>
                    <Form.Group controlId="confirmSalary">
                        <Form.Label>What is the minimum salary you will consider?</Form.Label>
                        <div className="input-group">
                            <span className="input-group-text">Rs.</span>
                            <Form.Control
                                type="number"
                                min="0"
                                step="0.1"
                                value={currentSalary}
                                onChange={(e) => setCurrentSalary(parseFloat(e.target.value))}
                                placeholder="e.g. 12.5"
                            />
                            <span className="input-group-text">LPA</span>
                        </div>
                    </Form.Group>
                    <Button variant="primary" onClick={handleConfirmSalary}>Continue</Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default JobPreference;
