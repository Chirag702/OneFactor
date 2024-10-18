import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGlobe, faBook, faDesktop, faPaintBrush, faHeart, faFlask, faUtensils } from '@fortawesome/free-solid-svg-icons';

const categories = [
    { name: 'Finance', jobs: 4286, icon: faHome, colorClass: 'bg-color-1' },
    { name: 'Sale/Marketing', jobs: 2000, icon: faGlobe, colorClass: 'bg-color-2' },
    { name: 'Education/Training', jobs: 1450, icon: faBook, colorClass: 'bg-color-3' },
    { name: 'Technologies', jobs: 5100, icon: faDesktop, colorClass: 'bg-color-4' },
    { name: 'Art/Design', jobs: 5079, icon: faPaintBrush, colorClass: 'bg-color-5' },
    { name: 'Healthcare', jobs: 3235, icon: faHeart, colorClass: 'bg-color-6' },
    { name: 'Science', jobs: 1800, icon: faFlask, colorClass: 'bg-color-7' },
    { name: 'Food Services', jobs: 4286, icon: faUtensils, colorClass: 'bg-color-8' },
];

const BrowseCategories = () => {
    return (
        <section className="category section bg-white">
            <Container>
                <div className="section-header">
                    <h2 className="section-title">Browse Categories</h2>
                    <p>Most popular categories of the portal, sorted by popularity</p>
                </div>
                <Row>
                    {categories.map((category, index) => (
                        <Col key={index} lg={3} md={6} xs={12} className="f-category">
                            <a href="browse-jobs.html">
                                <div className={`icon ${category.colorClass}`}>
                                    <FontAwesomeIcon icon={category.icon} />
                                </div>
                                <h3>{category.name}</h3>
                                <p>({category.jobs} jobs)</p>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default BrowseCategories;
