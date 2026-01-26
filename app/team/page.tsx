import React from 'react';
import PageHeader from '@/components/PageHeader';

export default function Team() {
    return (
        <>
            <PageHeader
                title="Team Members"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Pages', href: '#' },
                    { label: 'Team Members', active: true }
                ]}
            />

            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
                        <h1 className="display-6 mb-5">Meet Our Professional Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="/img/team-1.jpg" alt="" />
                                <div className="text-center p-4">
                                    <h5>S. Sonai</h5>
                                    <span>Managing Director</span>
                                </div>
                                <div className="team-text text-center bg-white p-4">
                                    <h5>S. Sonai</h5>
                                    <p>Managing Director</p>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-youtube"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="/img/team-2.jpg" alt="" />
                                <div className="text-center p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-text text-center bg-white p-4">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-youtube"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="/img/team-3.jpg" alt="" />
                                <div className="text-center p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-text text-center bg-white p-4">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-youtube"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item rounded">
                                <img className="img-fluid" src="/img/team-4.jpg" alt="" />
                                <div className="text-center p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-text text-center bg-white p-4">
                                    <h5>Full Name</h5>
                                    <p>Designation</p>
                                    <div className="d-flex justify-content-center">
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-youtube"></i></a>
                                        <a className="btn btn-square btn-light m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Team End */}
        </>
    );
}
