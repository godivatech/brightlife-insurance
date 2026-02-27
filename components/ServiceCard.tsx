import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href, icon }) => {
    return (
        <div className="service-item rounded h-100 p-5 position-relative" style={{ transition: 'all 0.3s ease' }}>
            <div className="d-flex align-items-center ms-n5 mb-4">
                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                    <img className="img-fluid" src={icon || "/img/icon/icon-10-light.png"} alt="" />
                </div>
                <h4 className="mb-0">
                    <Link href={href} className="text-decoration-none text-dark stretched-link">
                        {title}
                    </Link>
                </h4>
            </div>
            <p className="mb-4">{description}</p>
            <div className="d-flex align-items-center flex-wrap gap-2 position-relative" style={{ zIndex: 2 }}>
                <a
                    className="btn btn-outline-success border-2 px-3 d-flex align-items-center"
                    href={`https://wa.me/919942980040?text=Hello%20Bright%20Life%20Insurance%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(title)}%20services.%20Please%20provide%20more%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp me-2"></i> WhatsApp
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;
