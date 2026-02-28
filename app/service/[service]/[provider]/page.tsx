import React from 'react';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import PlanCard from '@/components/PlanCard';
import Appointment from '@/components/Appointment';
import { services } from '@/data/services';
import { Metadata } from 'next';
import Link from 'next/link';
import PlanSearch from '@/components/PlanSearch';

interface Props {
    params: Promise<{ service: string; provider: string; }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { service: serviceSlug, provider: providerSlug } = await params;
    const service = services.find(s => s.slug === serviceSlug);
    const provider = service?.providers?.find(p => p.slug === providerSlug);
    if (!provider) return { title: 'Not Found' };
    return {
        title: `${provider.name} - ${service?.name} | BrightLife Insurance`,
        description: provider.description
    };
}

export default async function ProviderDetail({ params }: Props) {
    const { service: serviceSlug, provider: providerSlug } = await params;
    const service = services.find(s => s.slug === serviceSlug);
    const provider = service?.providers?.find(p => p.slug === providerSlug);

    if (!service || !provider) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={provider.name}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/service' },
                    { label: service.name, href: `/service/${service.slug}` },
                    { label: provider.name, active: true }
                ]}
            />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Main Content (Left Column) */}
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded mb-5 w-100" src="/img/carousel-2.png" alt={provider.name} style={{ objectFit: 'cover', height: '400px' }} />
                            <h2 className="mb-4">{provider.name}</h2>
                            <p className="mb-5 fs-5 text-muted">{provider.description}</p>

                            {/* If this is the only provider, inject parent service marketing copy here */}
                            {service.providers && service.providers.length === 1 && (
                                <div className="mb-5">
                                    <h3 className="mb-4">Why Choose Our {service.name}?</h3>
                                    <p className="mb-4">
                                        {service.whyChoose}
                                    </p>

                                    {service.keyBenefits && service.keyBenefits.length > 0 && (
                                        <div className="row g-4 mb-4">
                                            {service.keyBenefits.map((benefit, i) => (
                                                <div key={i} className="col-sm-6">
                                                    <div className="d-flex align-items-center">
                                                        <div className="btn-lg-square bg-primary rounded-circle me-3" style={{ width: '40px', height: '40px' }}>
                                                            <i className="fa fa-check text-white"></i>
                                                        </div>
                                                        <h6 className="mb-0">{benefit}</h6>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            <h3 className="mb-4">Why {provider.name}?</h3>
                            <p className="mb-4">
                                {provider.whyChoose}
                            </p>

                            <h3 className="mb-4 mt-5">How to Apply</h3>
                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                    1
                                </div>
                                <div className="ms-4">
                                    <h5>Consultation</h5>
                                    <p>Schedule a meeting with our expert advisors to understand which plan is best for you.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                    2
                                </div>
                                <div className="ms-4">
                                    <h5>Documentation</h5>
                                    <p>Submit the required KYC documents and application forms for verification.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-5">
                                <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                    3
                                </div>
                                <div className="ms-4">
                                    <h5>Policy Issuance</h5>
                                    <p>Once approved, you will receive your policy document directly to your email.</p>
                                </div>
                            </div>

                            <h3 className="mb-4">Available Plans</h3>
                            <PlanSearch
                                plans={provider.plans || []}
                                serviceSlug={service.slug}
                                providerSlug={provider.slug}
                            />
                        </div>

                        {/* Sidebar (Right Column) */}
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-light rounded p-4 mb-4">
                                <h4 className="mb-4">Other Providers</h4>
                                <ul className="list-unstyled mb-0">
                                    {service.providers?.filter(p => p.slug !== provider.slug).map(p => (
                                        <li key={p.slug} className="mb-2">
                                            <Link href={`/service/${service.slug}/${p.slug}`} className="text-decoration-none">
                                                <i className="fa fa-angle-right me-2"></i> {p.name}
                                            </Link>
                                        </li>
                                    ))}
                                    {(!service.providers || service.providers.length <= 1) && (
                                        <p className="text-muted small">No other providers in this category.</p>
                                    )}
                                </ul>
                            </div>

                            <Appointment isSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function generateStaticParams() {
    const params: { service: string; provider: string }[] = [];
    for (const s of services) {
        if (s.providers) {
            for (const p of s.providers) {
                params.push({ service: s.slug, provider: p.slug });
            }
        }
    }
    return params;
}
