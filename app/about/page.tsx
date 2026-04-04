"use client";
import React from 'react';
import PageHeader from '@/components/PageHeader';
import CountUp from 'react-countup';

export default function About() {
    return (
        <>
            <PageHeader
                title="About Us"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Pages', href: '#' },
                    { label: 'About', active: true }
                ]}
            />

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative overflow-hidden rounded ps-5 pt-5 h-100" style={{ minHeight: '400px' }}>
                                <img 
                                    className="position-absolute h-100 about-profile-img" 
                                    src="/img/profile 3.png" 
                                    alt="S. Sonai Profile" 
                                    style={{ objectFit: 'cover', width: 'auto', maxWidth: '500px', left: '50%', transform: 'translateX(-50%)' }} 
                                />
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
                                    We're Here To Assist You With Exploring Protection
                                </h1>
                                <p className="fs-5 text-primary mb-4">
                                    Bright Life Insurance is committed to providing the best financial security for your loved ones.
                                </p>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 me-3" src="/img/icon/icon-04-primary.png" alt="" />
                                            <h5 className="mb-0">Flexible Insurance Plans</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 me-3" src="/img/icon/icon-03-primary.png" alt="" />
                                            <h5 className="mb-0">Claims Assistance</h5>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4">
                                    With over 25 years of experience and 1300+ happy clients, S. Sonai leads Bright Life Insurance to ensure you get the right coverage. Life, Health, or Motor - we have you covered.
                                </p>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0">Call Us: +91 99429 80040, +91 98941 66531</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Facts Start */}
            <div className="container-fluid overflow-hidden my-5 px-lg-0">
                <div className="container facts px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 facts-text wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 px-4 ps-lg-0">
                                <h1 className="text-white mb-4">Empowering Your Financial Freedom</h1>
                                <p className="text-light mb-5">
                                    Our mission is to make insurance accessible, understandable, and effective for everyone. From safeguarding your family's future to protecting your vehicle, we deliver promises, not just policies.
                                </p>
                                <a href="" className="align-self-start btn btn-secondary py-3 px-5">Join Our Family</a>
                            </div>
                        </div>
                        <div className="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100 px-4 pe-lg-0">
                                <div className="row g-5">
                                    <div className="col-sm-6">
                                        <h1 className="display-5">
                                            <CountUp end={1300} duration={2.5} enableScrollSpy scrollSpyOnce />
                                        </h1>
                                        <p className="fs-5 text-primary">Happy Families</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1 className="display-5">
                                            <CountUp end={500} duration={2.5} enableScrollSpy scrollSpyOnce />
                                        </h1>
                                        <p className="fs-5 text-primary">Policies Active</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1 className="display-5">
                                            <CountUp end={60} duration={2.5} enableScrollSpy scrollSpyOnce />
                                        </h1>
                                        <p className="fs-5 text-primary">Claims Settled (%)</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h1 className="display-5">
                                            <CountUp end={15} duration={2.5} enableScrollSpy scrollSpyOnce />
                                        </h1>
                                        <p className="fs-5 text-primary">Years of Trust</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}

            {/* Core Values Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
                        <h1 className="display-6 mb-5">Our Core Values & Promise</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-light rounded h-100 p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                    <i className="fa fa-shield-alt text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">Integrity & Transparency</h4>
                                <p className="mb-4">We believe in clear, honest communication. You will always understand your coverage, terms, and options without any hidden surprises.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded h-100 p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                    <i className="fa fa-users text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">Customer-First Approach</h4>
                                <p className="mb-4">Your needs are our priority. We take the time to listen, understand your unique situation, and tailor solutions that truly protect your family.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-light rounded h-100 p-5">
                                <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                                    <i className="fa fa-handshake text-primary fs-4"></i>
                                </div>
                                <h4 className="mb-3">Lifelong Support</h4>
                                <p className="mb-4">We don't just sell policies and disappear. From policy adjustments to claims assistance, we are by your side for the entire journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Core Values End */}
        </>
    );
}
