import React from 'react';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import ProviderCard from '@/components/ProviderCard';
import Appointment from '@/components/Appointment';
import { services } from '@/data/services';
import { Metadata } from 'next';
import Link from 'next/link';

interface Props {
    params: Promise<{ service: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { service: serviceSlug } = await params;
    const service = services.find(s => s.slug === serviceSlug);
    if (!service) return { title: 'Not Found' };
    return {
        title: `${service.name} | BrightLife Insurance`,
        description: service.description
    };
}

export default async function ServiceDetail({ params }: Props) {
    const { service: serviceSlug } = await params;
    const service = services.find(s => s.slug === serviceSlug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={service.name}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/service' },
                    { label: service.name, active: true }
                ]}
            />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Main Content (Left Column) */}
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded mb-5 w-100" src="/img/carousel-2.jpg" alt={service.name} style={{ objectFit: 'cover', height: '400px' }} />
                            <h2 className="mb-4">{service.name}</h2>
                            <p className="mb-5 fs-5 text-muted">{service.description}</p>

                            <h3 className="mb-4">Why Choose Our {service.name}?</h3>
                            <p className="mb-4">
                                Our {service.name} offerings are designed to provide maximum security, rapid claim settlement, and comprehensive financial protection. Partnering with top-tier providers, we ensure you get the best value and coverage available in the market.
                            </p>

                            <div className="row g-4 mb-5">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                                            <i className="fa fa-check text-white"></i>
                                        </div>
                                        <h5 className="mb-0">Fast Claim Settlement</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                                            <i className="fa fa-check text-white"></i>
                                        </div>
                                        <h5 className="mb-0">24/7 Support</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                                            <i className="fa fa-check text-white"></i>
                                        </div>
                                        <h5 className="mb-0">Tailored Coverage</h5>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="btn-lg-square bg-primary rounded-circle me-3">
                                            <i className="fa fa-check text-white"></i>
                                        </div>
                                        <h5 className="mb-0">Expert Advisors</h5>
                                    </div>
                                </div>
                            </div>

                            <h3 className="mb-4">Our Providers</h3>
                            <div className="row g-4">
                                {service.providers?.map((provider) => (
                                    <div key={provider.slug} className="col-md-6">
                                        <ProviderCard
                                            title={provider.name}
                                            description={provider.description}
                                            href={`/service/${service.slug}/${provider.slug}`}
                                        />
                                    </div>
                                ))}
                                {(!service.providers || service.providers.length === 0) && (
                                    <p>No providers available at the moment.</p>
                                )}
                            </div>
                        </div>

                        {/* Sidebar (Right Column) */}
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            {/* Other Services */}
                            <div className="bg-light rounded p-4 mb-4">
                                <h4 className="mb-4">Other Services</h4>
                                <ul className="list-unstyled mb-0">
                                    {services.filter(s => s.slug !== service.slug).map(s => (
                                        <li key={s.slug} className="mb-2">
                                            <Link href={`/service/${s.slug}`} className="text-decoration-none">
                                                <i className="fa fa-angle-right me-2"></i> {s.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <Appointment isSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function generateStaticParams() {
    return services.map((service) => ({
        service: service.slug,
    }));
}
