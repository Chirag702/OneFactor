
import React from 'react';
import NavBar from '../../components/NavBar';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import BrowseCategories from '../../components/BrowseCategories';
import FeaturedJobs from '../../components/FeaturedJobs';
import BrowseJobs from '../../components/BrowseJobs';
import HowItWorks from '../../components/HowItWorks';
import JobSearch from '../../components/JobSearch';
import HeroSection from '../../components/HeroSection';
import JobSearchBenefits from '../../components/JobSearchBenifits';
import Footer from '../../components/Footer';

function HomeScreen() {
    return (
        <>
            <NavBar />
            <HeroSection />

            <HowItWorks />
            <Footer />
        </>
    );
}

export default HomeScreen;
