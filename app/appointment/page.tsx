import React from 'react';
import PageHeader from '@/components/PageHeader';

export default function Appointment() {
    return (
        <>
            <PageHeader
                title="Appointment"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Pages', href: '#' },
                    { label: 'Appointment', active: true }
                ]}
            />

            {/* Appointment Start */}
            <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                            <h1 className="display-6 mb-5">
                                We're Award Winning Insurance Company
                            </h1>
                            <p className="mb-5">
                                Ready to secure your future? Schedule a free consultation with our experts. We'll assess your needs and guide you to the perfect insurance plan. Whether it's Life, Health, or Motor insurance, we make the process simple and transparent.
                            </p>
                            <div className="bg-light rounded p-3">
                                <div className="d-flex align-items-center bg-white rounded p-3">
                                    <img
                                        className="flex-shrink-0 rounded-circle me-3"
                                        src="/img/profile.jpg"
                                        alt=""
                                    />
                                    <h5 className="mb-0">Call Us: +91 99429 80040</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-light rounded p-5">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="gname"
                                                    placeholder="Gurdian Name"
                                                />
                                                <label htmlFor="gname">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="gmail"
                                                    placeholder="Gurdian Email"
                                                />
                                                <label htmlFor="gmail">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cname"
                                                    placeholder="Child Name"
                                                />
                                                <label htmlFor="cname">Your Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cage"
                                                    placeholder="Child Age"
                                                />
                                                <label htmlFor="cage">Service Type</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: '80px' }}
                                                ></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary py-3 px-5" type="submit">
                                                Get Appointment
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Appointment End */}
        </>
    );
}
