import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EducationInfo() {
    const [isEditing, setIsEditing] = useState(false);
    const [institution, setInstitution] = useState("Jamnalal Bajaj Institute of Management Studies (JBIMS)");
    const [degree, setDegree] = useState("BArch in Aerospace Engineering");
    const [graduationYear, setGraduationYear] = useState("2025");

    const handleSaveChanges = () => {
        setIsEditing(false);
    };

    const handleCancelChanges = () => {
        setIsEditing(false);
    };

    return (
        <div id="education-info" className="profile-block mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <span><strong>Education Info</strong></span>
                <div className="profile-editor-closed">
                    <a href="#" onClick={() => setIsEditing(true)}>
                        <i className="fa fa-pencil"></i> Edit
                    </a>
                </div>
            </div>
            <hr style={{ marginTop: '10px', marginBottom: '10px' }} />

            {!isEditing ? (
                <div className="profile-editor-closed">
                    <div className="profile-content short-paragraph">
                        Institution: <strong>{institution}</strong><br />
                        Degree: <strong>{degree}</strong><br />
                        Graduation Year: <strong>{graduationYear}</strong>
                    </div>
                </div >
            ) : (
                <div className="profile-editor-opened">
                    <Form>
                        <Form.Group controlId="institution">
                            <Form.Label>Institution Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={institution}
                                onChange={(e) => setInstitution(e.target.value)}
                                placeholder="e.g. Jamnalal Bajaj Institute of Management Studies (JBIMS)"
                            />
                        </Form.Group>

                        <Form.Group controlId="degree">
                            <Form.Label>Degree</Form.Label>
                            <Form.Control
                                type="text"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                placeholder="e.g. BArch in Aerospace Engineering"
                            />
                        </Form.Group>

                        <Form.Group controlId="graduationYear">
                            <Form.Label>Graduation Year</Form.Label>
                            <Form.Control
                                type="text"
                                value={graduationYear}
                                onChange={(e) => setGraduationYear(e.target.value)}
                                placeholder="e.g. 2025"
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-end mt-3">
                            <Button variant="secondary" onClick={handleCancelChanges} className="me-2">Cancel</Button>
                            <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
                        </div>
                    </Form>
                </div>
            )
            }
        </div >
    );
}

export default EducationInfo;
