"use client";
import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <div className="container-fluid overflow-hidden my-5 px-lg-0">
            <div className="container facts px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 facts-text wow fadeIn" data-wow-delay="0.1s">
                        <div className="h-100 px-4 ps-lg-0">
                            <h1 className="text-white mb-4">For Individuals And Organisations</h1>
                            <p className="text-light mb-5">
                                Whether you need personal life coverage, a group health plan, or reliable motor insurance, Bright Life Insurance has tailored solutions for everyone.
                            </p>
                            <a href="" className="align-self-start btn btn-secondary py-3 px-5">More Details</a>
                        </div>
                    </div>
                    <div className="col-lg-6 facts-counter wow fadeIn" data-wow-delay="0.5s">
                        <div className="h-100 px-4 pe-lg-0">
                            <div className="row g-5">
                                <div className="col-sm-6">
                                    <h1 className="display-5">
                                        <CountUp end={1300} duration={2.5} enableScrollSpy scrollSpyOnce />
                                    </h1>
                                    <p className="fs-5 text-primary">Happy Clients</p>
                                </div>
                                <div className="col-sm-6">
                                    <h1 className="display-5">
                                        <CountUp end={98} duration={2.5} enableScrollSpy scrollSpyOnce />%
                                    </h1>
                                    <p className="fs-5 text-primary">Success Rate</p>
                                </div>
                                <div className="col-sm-6">
                                    <h1 className="display-5">
                                        <CountUp end={1000} duration={2.5} enableScrollSpy scrollSpyOnce />
                                    </h1>
                                    <p className="fs-5 text-primary">Claims Settled</p>
                                </div>
                                <div className="col-sm-6">
                                    <h1 className="display-5">
                                        <CountUp end={5} duration={2.5} enableScrollSpy scrollSpyOnce />
                                    </h1>
                                    <p className="fs-5 text-primary">Insurance Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
