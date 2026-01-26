import React from 'react';
import PageHeader from '@/components/PageHeader';

export default function Contact() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Pages', href: '#' },
                    { label: 'Contact Us', active: true }
                ]}
            />

            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <h1 className="display-6 mb-5">
                                If You Have Any Query, Please Contact Us
                            </h1>
                            <p className="mb-4">
                                reliable partner in securing your future. Reach out to us for personalized insurance advice, claim assistance, or any other inquiries. We are here to help you.
                            </p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Your Name"
                                            />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Your Email"
                                            />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                placeholder="Subject"
                                            />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                placeholder="Leave a message here"
                                                id="message"
                                                style={{ height: '100px' }}
                                            ></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary py-3 px-5" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div
                            className="col-lg-6 wow fadeIn"
                            data-wow-delay="0.5s"
                            style={{ minHeight: '450px' }}
                        >
                            <div className="position-relative rounded overflow-hidden h-100">
                                <iframe
                                    className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.961919427678!2d78.1345!3d9.9554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5bc64030639%3A0x6b447881643c7262!2sIyer%20Bungalow%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    frameBorder="0"
                                    style={{ minHeight: '450px', border: 0 }}
                                    allowFullScreen={true}
                                    aria-hidden="false"
                                    tabIndex={0}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
        </>
    );
}
