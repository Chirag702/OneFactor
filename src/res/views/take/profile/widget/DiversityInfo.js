import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DiversityInfo() {
    const [editorEnabled, setEditorEnabled] = useState(false);
    const [gender, setGender] = useState(null);
    const [isDifferentlyAbled, setIsDifferentlyAbled] = useState(null);
    const [workPermit, setWorkPermit] = useState(false);

    const handleEditorToggle = () => setEditorEnabled(!editorEnabled);
    const handleSave = (e) => {
        e.preventDefault();
        // Save functionality here
        setEditorEnabled(false);
    };
    const handleCancel = () => setEditorEnabled(false);

    return (
        <Container id="diversity-info" className="profile-block mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <span><strong>Diversity Info</strong></span>
                {!editorEnabled && (
                    <div className="profile-editor-closed">
                        <Link onClick={handleEditorToggle}>
                            <i className="fa fa-pencil"></i> Edit
                        </Link>
                    </div>
                )}
            </div>
            <hr style={{ marginTop: '10px', marginBottom: '10px' }} />

            {
                !editorEnabled ? (
                    <div className="profile-editor-closed mt-2">
                        <div className="profile-content short-paragraph">

                            Gender is <strong>{gender === 0 ? 'Male' : gender === 1 ? 'Female' : 'Not specified'}</strong><br />
                            Disability status{' '}
                            <strong>{isDifferentlyAbled === null ? 'not specified' : isDifferentlyAbled ? 'Yes' : 'No'}</strong><br />
                            Have work permits for <strong>{workPermit ? 'multiple countries' : 'India only'}</strong>
                        </div>

                    </div>
                ) : (
                    <div className="profile-content profile-editor-opened mt-3">
                        <Form>
                            <Form.Group controlId="gender-selection" className="radio-group">
                                <Form.Label>What is your gender?</Form.Label>

                                <div className="radio">
                                    <Form.Check
                                        type="radio"
                                        label="Female"
                                        name="gender"
                                        value="1"
                                    //     checked={gender === "1"}
                                    //   onChange={handleGenderChange}
                                    />
                                </div>

                                <div className="radio">
                                    <Form.Check
                                        type="radio"
                                        label="Male"
                                        name="gender"
                                        value="0"
                                    //  checked={gender === "0"}
                                    //onChange={handleGenderChange}
                                    />
                                </div>

                                {/* Display error message if gender is not selected */}
                                {/* {gender === null && (
                                    <Form.Text className="text-danger">
                                        Please select your gender.
                                    </Form.Text>
                                )} */}
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Label>Do you have any disabilities?</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="disability"
                                    value="true"
                                    checked={isDifferentlyAbled === true}
                                    onChange={() => setIsDifferentlyAbled(true)}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="disability"
                                    value="false"
                                    checked={isDifferentlyAbled === false}
                                    onChange={() => setIsDifferentlyAbled(false)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Do you hold a work permit to countries outside India?</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"
                                    name="workPermit"
                                    value="true"
                                    checked={workPermit === true}
                                    onChange={() => setWorkPermit(true)}
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    name="workPermit"
                                    value="false"
                                    checked={workPermit === false}
                                    onChange={() => setWorkPermit(false)}
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-end mt-4">
                                <Button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="btn btn-primary">
                                    Save Changes
                                </Button>
                            </div>
                        </Form>
                    </div>
                )
            }
        </Container >
    );
}

export default DiversityInfo;
