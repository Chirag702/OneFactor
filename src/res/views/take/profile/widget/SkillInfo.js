import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function SkillInfo() {
    const [isEditing, setIsEditing] = useState(false);
    const [currentRole, setCurrentRole] = useState("Graphic Design / Animation");
    const [mainSkills, setMainSkills] = useState("2D Animation");
    const [languages, setLanguages] = useState("English");

    const handleSaveChanges = () => {
        setIsEditing(false);
    };

    const handleCancelChanges = () => {
        setIsEditing(false);
    };

    return (
        <div id="skill-info" className="profile-block mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <span><strong>Skill Info</strong></span>
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
                        Current role: <strong>{currentRole}</strong><br />
                        Main skills: <strong>{mainSkills}</strong><br />
                        Languages known: <strong>{languages}</strong>
                    </div>
                </div>
            ) : (
                <div className="profile-editor-opened">
                    <Form>
                        <Form.Group controlId="currentRole">
                            <Form.Label>Current Role</Form.Label>
                            <Form.Control
                                type="text"
                                value={currentRole}
                                onChange={(e) => setCurrentRole(e.target.value)}
                                placeholder="e.g. Graphic Design / Animation"
                            />
                        </Form.Group>

                        <Form.Group controlId="mainSkills">
                            <Form.Label>Main Skills</Form.Label>
                            <Form.Control
                                type="text"
                                value={mainSkills}
                                onChange={(e) => setMainSkills(e.target.value)}
                                placeholder="e.g. 2D Animation"
                            />
                        </Form.Group>

                        <Form.Group controlId="languages">
                            <Form.Label>Languages Known</Form.Label>
                            <Form.Control
                                type="text"
                                value={languages}
                                onChange={(e) => setLanguages(e.target.value)}
                                placeholder="e.g. English"
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-end mt-3">
                            <Button variant="secondary" onClick={handleCancelChanges} className="me-2">Cancel</Button>
                            <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
                        </div>
                    </Form>
                </div>
            )}
        </div>
    );
}

export default SkillInfo;
