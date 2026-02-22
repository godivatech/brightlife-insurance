import React from 'react';
import { services } from '@/data/services';

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
                    {services.map((service, index) => (
                        <div key={service.slug} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * ((index % 3) + 1)}s`}>
                            <div className="service-item rounded h-100 p-5">
                                <div className="d-flex align-items-center ms-n5 mb-4">
                                    <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                                        <img className="img-fluid" src={`/img/icon/icon-0${(index % 9) + 1}-light.png`} alt="" />
                                    </div>
                                    <h4 className="mb-0">{service.name}</h4>
                                </div>
                                <p className="mb-4">
                                    {service.description}
                                </p>
                                <a className="btn btn-light px-3" href={`/service/${service.slug}`}>Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
