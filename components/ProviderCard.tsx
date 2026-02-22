import React from 'react';
import Link from 'next/link';

interface ProviderCardProps {
    title: string;
    description: string;
    href: string;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ title, description, href }) => {
    return (
        <div className="service-item rounded h-100 p-5 bg-light">
            <h4 className="mb-3">{title}</h4>
            <p className="mb-4">{description}</p>
            <Link className="btn btn-primary px-3 text-white" href={href}>View Plans</Link>
        </div>
    );
};

export default ProviderCard;
