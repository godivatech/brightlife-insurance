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
            <Link className="btn btn-outline-primary px-3" href={href}>View Details</Link>
        </div>
    );
};

export default PlanCard;
