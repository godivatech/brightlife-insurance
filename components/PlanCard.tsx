import React from 'react';
import Link from 'next/link';

interface PlanCardProps {
    title: string;
    description: string;
    href: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, description, href }) => {
    return (
        <div className="service-item rounded h-100 p-5 border">
            <h5 className="mb-3">{title}</h5>
            <p className="mb-4 text-muted">{description}</p>
            <div className="d-flex align-items-center flex-wrap gap-2">
                <Link className="btn btn-outline-primary px-3" href={href}>View Details</Link>
                <a
                    className="btn btn-outline-success border-2 px-3 d-flex align-items-center"
                    href={`https://wa.me/919942980040?text=Hello%20Bright%20Life%20Insurance%2C%20I%20want%20to%20know%20more%20about%20the%20${encodeURIComponent(title)}%20plan.%20Please%20assist%20me.`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-whatsapp me-2"></i> WhatsApp
                </a>
            </div>
        </div>
    );
};

export default PlanCard;
