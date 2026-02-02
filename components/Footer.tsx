import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <img
                            className="img-fluid me-3 mb-3"
                            src="/img/Logo.jpeg"
                            alt="Bright Life Insurance"
                            style={{ maxHeight: '80px' }}
                        />
                        <p>
                            Bright Life Insurance is dedicated to providing the best financial security. We specialize in Life, Health, and Motor Insurance tailored to your needs.
                        </p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square me-3" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-square me-0" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Address</h5>
                        <p>
                            <i className="fa fa-map-marker-alt me-3"></i>iyerbungalow,madurai
                        </p>
                        <p>
                            <i className="fa fa-phone-alt me-3"></i>+91 99429 80040
                        </p>
                        <p>
                            <i className="fa fa-envelope me-3"></i>info@brightlife.com
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Quick Links</h5>
                        <a className="btn btn-link" href="/about">
                            About Us
                        </a>
                        <a className="btn btn-link" href="/contact">
                            Contact Us
                        </a>
                        <a className="btn btn-link" href="/service">
                            Our Services
                        </a>
                        <a className="btn btn-link" href="">
                            Terms & Condition
                        </a>
                        <a className="btn btn-link" href="">
                            Support
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Newsletter</h5>
                        <p>Stay updated with our latest news and offers.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input
                                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Your email"
                            />
                            <button
                                type="button"
                                className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="#">Bright Life Insurance</a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed and Developed by <a href="https://www.godivatech.com" target="_blank">Godivatech</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
