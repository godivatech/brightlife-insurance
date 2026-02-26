'use client';

import React, { useState } from 'react';
import PlanCard from './PlanCard';

interface Plan {
    name: string;
    slug: string;
    description: string;
}

interface PlanSearchProps {
    plans: Plan[];
    serviceSlug: string;
    providerSlug: string;
}

const PlanSearch: React.FC<PlanSearchProps> = ({ plans, serviceSlug, providerSlug }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPlans = plans.filter(plan =>
        plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="plan-search-container">
            <div className="position-relative mb-5 shadow-sm rounded overflow-hidden">
                <span className="position-absolute h-100 d-flex align-items-center ps-4 text-primary">
                    <i className="fa fa-search"></i>
                </span>
                <input
                    type="text"
                    className="form-control border-0 py-4 ps-5 mb-0"
                    placeholder="Search for a specific plan by name or feature..."
                    style={{ fontSize: '1.1rem', backgroundColor: '#f8f9fa' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                    <button
                        className="btn position-absolute top-50 end-0 translate-middle-y me-3 text-secondary p-0"
                        onClick={() => setSearchTerm('')}
                        style={{ border: 'none', background: 'none' }}
                        title="Clear search"
                    >
                        <i className="fa fa-times-circle"></i>
                    </button>
                )}
            </div>

            <div className="row g-4">
                {filteredPlans.length > 0 ? (
                    filteredPlans.map((plan) => (
                        <div key={plan.slug} className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <PlanCard
                                title={plan.name}
                                description={plan.description}
                                href={`/service/${serviceSlug}/${providerSlug}/${plan.slug}`}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-12 py-5 text-center">
                        <div className="mb-3 text-primary">
                            <i className="fa fa-search fa-3x opacity-50"></i>
                        </div>
                        <h5>No plans found matching "{searchTerm}"</h5>
                        <p className="text-muted">Try using different keywords or browse our full list above.</p>
                        <button className="btn btn-outline-primary mt-2" onClick={() => setSearchTerm('')}>
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlanSearch;
