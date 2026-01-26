import React from 'react';

const Services = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
                    <h1 className="display-6 mb-5">
                        We Provide Professional Insurance Services
                    </h1>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded h-100 p-5">
                            <div className="d-flex align-items-center ms-n5 mb-4">
                                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                    <img className="img-fluid" src="/img/icon/icon-10-light.png" alt="" />
                                </div>
                                <h4 className="mb-0">Life Insurance</h4>
                            </div>
                            <p className="mb-4">
                                Secure your family's financial future with our comprehensive life insurance plans.
                            </p>
                            <a className="btn btn-light px-3" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item rounded h-100 p-5">
                            <div className="d-flex align-items-center ms-n5 mb-4">
                                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                    <img className="img-fluid" src="/img/icon/icon-01-light.png" alt="" />
                                </div>
                                <h4 className="mb-0">Health Insurance</h4>
                            </div>
                            <p className="mb-4">
                                Get the best medical care without financial worry. Our health plans cover you and your family.
                            </p>
                            <a className="btn btn-light px-3" href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded h-100 p-5">
                            <div className="d-flex align-items-center ms-n5 mb-4">
                                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                    <img className="img-fluid" src="/img/icon/icon-08-light.png" alt="" />
                                </div>
                                <h4 className="mb-0">Motor Insurance</h4>
                            </div>
                            <p className="mb-4">
                                Protect your vehicle against accidents and theft with our reliable motor insurance.
                            </p>
                            <a className="btn btn-light px-3" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
