import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import NavBar from '../../../../components/NavBar';

const CandidateOnboarding = () => {
  const [careerStage, setCareerStage] = useState(null);
  const [jobType, setJobType] = useState(null);
  const [experience, setExperience] = useState('');
  const [preferredRole, setPreferredRole] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [skills, setSkills] = useState([]);
  const [suggestedSkills] = useState(['3D Animation', 'Graphic Design', '2D Animation']); // example suggested skills
  const handleAddSkill = (skill) => {
    if (!skills.includes(skill)) setSkills([...skills, skill]);
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <>
      <NavBar />
      <div className="container-fluid d-flex justify-content-center align-items-center pt-4">
        <div className="col-lg-6 col-10 p-5 bg-white">
          <Container className="text-center">
            <div className="heading">
              <h3>Step 1/4: Add your skills</h3>
              <p>Hi Chirag! We just need some quick info about your ideal job.</p>
            </div>
          </Container>
          <hr />

          <Form.Group className="radio-group">
            <Form.Label>Are you a working professional or fresher?</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="I am a working professional"
                name="careerStage"
                value="1"
                checked={careerStage === '1'}
                onChange={(e) => setCareerStage(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="I am a student or fresher"
                name="careerStage"
                value="0"
                checked={careerStage === '0'}
                onChange={(e) => setCareerStage(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="I am on a career break"
                name="careerStage"
                value="2"
                checked={careerStage === '2'}
                onChange={(e) => setCareerStage(e.target.value)}
              />
            </div>
          </Form.Group>
          <Form.Group className="radio-group mt-4">
            <Form.Label>What kind of jobs are you looking for?</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Both internships and full-time"
                name="jobType"
                value="0"
                checked={jobType === '0'}
                onChange={(e) => setJobType(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Full-time only"
                name="jobType"
                value="1"
                checked={jobType === '1'}
                onChange={(e) => setJobType(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Internships only"
                name="jobType"
                value="2"
                checked={jobType === '2'}
                onChange={(e) => setJobType(e.target.value)}
              />
            </div>
          </Form.Group>


          <Form.Group className='mt-4'>
            <Form.Label>
              Select your <i>preferred</i> role:
            </Form.Label>
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-12">
                <Form.Control
                  as="select"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="" disabled>
                    Select a role
                  </option>
                  <optgroup label="Software Engineering">
                    <option value="0">Backend Development</option>
                    <option value="1">Big Data / DWH / ETL</option>
                    <option value="2">Embedded / Kernel Development</option>
                    <option value="3">Frontend Development</option>
                    <option value="4">Full-Stack Development</option>
                    <option value="5">Mobile Development</option>
                    <option value="6">QA / SDET</option>
                    <option value="7">Other Software Development</option>
                  </optgroup>
                  <optgroup label="Technical Management">
                    <option value="8">Engineering Management</option>
                    <option value="9">Product Management</option>
                    <option value="10">Project Management</option>
                  </optgroup>
                  <optgroup label="Data Science and Analysis">
                    <option value="11">Data Analysis / Business Intelligence</option>
                    <option value="12">Data Science / Machine Learning</option>
                  </optgroup>
                  <optgroup label="Design and Creative">
                    <option value="13">Graphic Design / Animation</option>
                    <option value="14">Photography / Videography</option>
                    <option value="15">UX / Visual Design</option>
                    <option value="16">Other Design</option>
                  </optgroup>
                  <optgroup label="IT Operations and Support">
                    <option value="17">Database Admin / Development</option>
                    <option value="18">DevOps / Cloud</option>
                    <option value="19">Functional / Technical Consulting</option>
                    <option value="20">IT Management / IT Support</option>
                    <option value="21">IT Security</option>
                    <option value="22">Network Administration</option>
                    <option value="23">Solution Architecture / Presales</option>
                    <option value="24">Systems Administration</option>
                    <option value="25">Technical / Production Support</option>
                    <option value="26">Technical Writing</option>
                  </optgroup>
                  <optgroup label="Human Resources">
                    <option value="27">HR Generalist</option>
                    <option value="28">Talent Acquisition</option>
                  </optgroup>
                  <optgroup label="Marketing">
                    <option value="29">Brand Management</option>
                    <option value="30">Content Writing</option>
                    <option value="31">Event Management</option>
                    <option value="32">Online Marketing</option>
                    <option value="33">PR / Communications</option>
                    <option value="34">SEO / SEM</option>
                  </optgroup>
                  <optgroup label="Sales and Business">
                    <option value="35">Customer Service</option>
                    <option value="36">General Management / Strategy</option>
                    <option value="37">Sales / Business Development</option>
                  </optgroup>
                  <optgroup label="Operations">
                    <option value="38">Accounting / Finance</option>
                    <option value="39">Operations Management</option>
                  </optgroup>
                </Form.Control>
              </div>
            </div>
          </Form.Group>


          <Form.Group className="mt-4">
            <div className="col-md-8 col-sm-8 col-xs-12">

              <Form.Label>Highlight your unique skills to recruiters and get personalized job recommendations</Form.Label>
              <div>
                <label>Selected Skills:</label>
                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0 }}>
                  {skills.map((skill, index) => (
                    <li
                      key={index}
                      style={{
                        margin: '5px',
                        padding: '5px 10px',
                        backgroundColor: '#f8d7da', // light red background for danger color
                        color: '#721c24', // dark red text
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {skill}
                      <span
                        onClick={() => handleRemoveSkill(skill)}
                        style={{
                          cursor: 'pointer',
                          color: '#721c24',
                          marginLeft: '8px',
                          fontWeight: 'bold',
                        }}
                      >
                        &times;
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
            <Form.Group>
              <div className="col-md-8 col-sm-8 col-xs-12">

                <Form.Control
                  as="select"
                  onChange={(e) => handleAddSkill(e.target.value)}
                  value=""
                >
                  <option value="">Add a skill</option>
                  {suggestedSkills.map((skill, index) => (
                    <option key={index} value={skill}>{skill}</option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>
          </Form.Group>
        </div>


      </div>
    </>);
};

export default CandidateOnboarding;
