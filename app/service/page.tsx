import React from 'react';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | BrightLife Insurance',
    description: 'Explore our comprehensive insurance services including Life Insurance, Health Insurance, and more.',
};

export default function ServicePage() {
    return (
        <>
            <PageHeader
                title="Services"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', active: true }
                ]}
            />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
                        <h1 className="display-6 mb-5">
                            We Provide professional Insurance Services
                        </h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {services.map((service, index) => (
                            <div key={service.slug} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * ((index % 3) + 1)}s`}>
                                <ServiceCard
                                    title={service.name}
                                    description={service.description}
                                    href={`/service/${service.slug}`}
                                    icon={`/img/icon/icon-0${(index % 9) + 1}-light.png`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
