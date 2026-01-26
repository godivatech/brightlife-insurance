import React from 'react';

const Appointment = () => {
    return (
        <div className="container-fluid appointment my-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                        <h1 className="display-6 text-white mb-5">
                            We Are Your Trusted Insurance Partner
                        </h1>
                        <p className="text-white mb-5">
                            Contact us today to schedule a consultation with our experts. We are here to answer all your queries and help you choose the best plan.
                        </p>
                        <div className="bg-white rounded p-3">
                            <div className="d-flex align-items-center bg-primary rounded p-3">
                                <img className="flex-shrink-0 rounded-circle me-3" src="/img/profile.jpg" alt="" />
                                <h5 className="text-white mb-0">Call Us: +91 99429 80040</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-white rounded p-5">
                            <form>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="gname" placeholder="Your Name" />
                                            <label htmlFor="gname">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="gmail" placeholder="Your Email" />
                                            <label htmlFor="gmail">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="cname" placeholder="Your Mobile" />
                                            <label htmlFor="cname">Your Mobile</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="cage" placeholder="Service Type" />
                                            <label htmlFor="cage">Service Type</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '80px' }}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">Get Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
