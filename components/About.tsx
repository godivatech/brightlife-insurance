import React from 'react';

const About = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="position-relative overflow-hidden rounded ps-5 pt-5 h-100" style={{ minHeight: '400px' }}>
                            <img className="position-absolute w-100 h-100" src="/img/about.png" alt="" style={{ objectFit: 'cover' }} />
                            <div className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3 experience-box">
                                <div className="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3">
                                    <h1 className="text-white mb-0">25+</h1>
                                    <h2 className="text-white">Years</h2>
                                    <h5 className="text-white mb-0">Experience</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="h-100">
                            <h1 className="display-6 mb-5">
                                Why Families Trust Us With Their Financial Future
                            </h1>
                            <p className="fs-5 text-primary mb-4">
                                We go beyond selling policies by ensuring you understand every detail before you sign. Transparency is our promise.
                            </p>
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 me-3" src="/img/icon/icon-04-primary.png" alt="" />
                                        <h5 className="mb-0">Hassle-Free Claims</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 me-3" src="/img/icon/icon-03-primary.png" alt="" />
                                        <h5 className="mb-0">24/7 Expert Support</h5>
                                    </div>
                                </div>
                            </div>
                            <p className="mb-4">
                                Choosing the right insurance can be overwhelming. We simplify the process with clear terms, honest advice, and a commitment to standing by your side when you need us most. Experience a service that puts your interests first.
                            </p>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex align-items-center">
                                    <h5 className="mb-0">Call Us: +91 99429 80040</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
