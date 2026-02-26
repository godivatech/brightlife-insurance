import React from 'react';

const Partners = () => {
    const partners = [
        {
            name: "LIC",
            logo: "/img/lic-logo.svg",
            alt: "Life Insurance Corporation of India"
        },
        {
            name: "Galaxy Health",
            logo: "/img/galaxy-logo.webp",
            alt: "Galaxy Health Insurance"
        }
    ];

    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ background: '#f8f9fa' }}>
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Partners</h5>
                    <h2 className="mb-4">Trusted by Industry Leaders</h2>
                </div>
                <div className="row justify-content-center align-items-center g-4">
                    {partners.map((partner, index) => (
                        <div key={index} className="col-6 col-md-3 text-center">
                            <div className="partner-item p-4 bg-white rounded shadow-sm hover-shadow transition h-100 d-flex flex-column align-items-center justify-content-center">
                                <img
                                    src={partner.logo}
                                    alt={partner.alt}
                                    className="img-fluid d-block"
                                    style={{ maxHeight: '75px', width: 'auto', objectFit: 'contain' }}
                                />
                                <p className="mt-3 mb-0 fw-bold text-muted small">{partner.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
