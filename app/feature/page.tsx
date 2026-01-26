import React from 'react';
import PageHeader from '@/components/PageHeader';

export default function Feature() {
    return (
        <>
            <PageHeader
                title="Features"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Pages', href: '#' },
                    { label: 'Features', active: true }
                ]}
            />

            {/* Features Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-6 mb-5">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">
                                Choose Bright Life Insurance for our commitment to your financial security. With over 25 years of experience, we offer tailored plans, fast claims processing, and dedicated support to ensure you have the best coverage for your needs.
                            </p>
                            <div className="row g-3">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="bg-light rounded h-100 p-3">
                                        <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                                            <img className="align-self-center mb-3" src="/img/icon/icon-06-primary.png" alt="" />
                                            <h5 className="mb-0">Easy Process</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                    <div className="bg-light rounded h-100 p-3">
                                        <div className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                                            <img className="align-self-center mb-3" src="/img/icon/icon-03-primary.png" alt="" />
                                            <h5 className="mb-0">Fast Delivery</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="bg-light rounded h-100 p-3">
                                        <div className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                                            <img className="align-self-center mb-3" src="/img/icon/icon-04-primary.png" alt="" />
                                            <h5 className="mb-0">Policy Controlling</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                    <div className="bg-light rounded h-100 p-3">
                                        <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                                            <img className="align-self-center mb-3" src="/img/icon/icon-07-primary.png" alt="" />
                                            <h5 className="mb-0">Money Saving</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative rounded overflow-hidden h-100" style={{ minHeight: '400px' }}>
                                <img className="position-absolute w-100 h-100" src="/img/feature.png" alt="" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
        </>
    );
}
