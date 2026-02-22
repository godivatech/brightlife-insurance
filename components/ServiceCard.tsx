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
        <div className="service-item rounded h-100 p-5">
            <div className="d-flex align-items-center ms-n5 mb-4">
                <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                    <img className="img-fluid" src={icon || "/img/icon/icon-10-light.png"} alt="" />
                </div>
                <h4 className="mb-0">{title}</h4>
            </div>
            <p className="mb-4">{description}</p>
            <Link className="btn btn-light px-3" href={href}>Read More</Link>
        </div>
    );
};

export default ServiceCard;
