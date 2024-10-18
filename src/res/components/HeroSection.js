import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <Container className="px-4 py-5 my-5 text-center">


            <h3 className="display-6 fw-bold">Get job referrals to top tech companies
            </h3>
            <div className="col-lg-6 mx-auto">
                <p className="lead display-7 mb-4">
                    Land more interviews with job referrals from employees at Google, Facebook, Amazon, and more.

                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Button
                        variant="primary"
                        type="button"
                        onClick={() => navigate("/r/signup")} // use arrow function to delay navigation
                    >
                        Signup
                    </Button>
                    <Button variant="outline-primary" className='ml-2 no-hover ' onClick={() => navigate("/r/signin")}  >
                        Signin
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default HeroSection;
