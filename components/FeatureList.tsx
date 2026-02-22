import React from 'react';

interface FeatureListProps {
    features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
    if (!features || features.length === 0) return null;

    return (
        <ul className="list-unstyled mb-4">
            {features.map((feature, index) => (
                <li key={index} className="mb-2 d-flex align-items-center">
                    <i className="fa fa-check text-primary me-3"></i>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    );
};

export default FeatureList;
