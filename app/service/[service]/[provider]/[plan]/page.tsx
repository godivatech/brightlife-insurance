import React from 'react';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import FeatureList from '@/components/FeatureList';
import Appointment from '@/components/Appointment';
import { services } from '@/data/services';
import { Metadata } from 'next';
import Link from 'next/link';

interface Props {
    params: Promise<{ service: string; provider: string; plan: string; }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { service: serviceSlug, provider: providerSlug, plan: planSlug } = await params;
    const service = services.find(s => s.slug === serviceSlug);
    const provider = service?.providers?.find(p => p.slug === providerSlug);
    const plan = provider?.plans?.find(p => p.slug === planSlug);
    if (!plan) return { title: 'Not Found' };
    return {
        title: `${plan.name} - ${provider?.name} | BrightLife Insurance`,
        description: plan.description
    };
}

export default async function PlanDetail({ params }: Props) {
    const { service: serviceSlug, provider: providerSlug, plan: planSlug } = await params;
    const service = services.find(s => s.slug === serviceSlug);
    const provider = service?.providers?.find(p => p.slug === providerSlug);
    const plan = provider?.plans?.find(p => p.slug === planSlug);

    if (!service || !provider || !plan) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={plan.name}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/service' },
                    { label: service.name, href: `/service/${service.slug}` },
                    { label: provider.name, href: `/service/${service.slug}/${provider.slug}` },
                    { label: plan.name, active: true }
                ]}
            />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Main Content (Left Column) */}
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid rounded mb-5 w-100" src="/img/carousel-1.jpg" alt={plan.name} style={{ objectFit: 'cover', height: '400px' }} />
                            <h2 className="mb-4">{plan.name}</h2>
                            <p className="mb-5 fs-5 text-muted">{plan.description}</p>

                            <h3 className="mb-4">Why Choose This Plan?</h3>
                            <p className="mb-4">
                                This plan is designed to provide comprehensive coverage and peace of mind. Whether you are looking for secure investments, health protection, or family security, {plan.name} offers industry-leading benefits tailored for your needs.
                            </p>

                            {plan.features && plan.features.length > 0 && (
                                <>
                                    <h3 className="mb-4 mt-5">Key Features & Benefits</h3>
                                    <div className="bg-light p-5 rounded mb-5">
                                        <FeatureList features={plan.features} />
                                    </div>
                                </>
                            )}

                            <h3 className="mb-4 mt-5">Frequently Asked Questions</h3>
                            <div className="accordion" id="accordionFAQ">
                                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Who is eligible for this plan?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body text-muted">
                                            Eligibility criteria vary based on age, medical history, and specific plan requirements. Contact our advisors for a detailed assessment of your eligibility.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How can I claim the benefits?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body text-muted">
                                            The claim process is simple and hassle-free. You can initiate a claim through our online portal, or by contacting our 24/7 customer support team with the required documentation.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Are there any tax benefits?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body text-muted">
                                            Yes, premiums paid towards this insurance plan may be eligible for tax deductions under relevant sections of the Income Tax Act. Please consult with a tax advisor for specifics.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar (Right Column) */}
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-light rounded p-4 mb-4">
                                <h4 className="mb-4">Other Plans by {provider.name}</h4>
                                <ul className="list-unstyled mb-0">
                                    {provider.plans?.filter(p => p.slug !== plan.slug).map(p => (
                                        <li key={p.slug} className="mb-2">
                                            <Link href={`/service/${service.slug}/${provider.slug}/${p.slug}`} className="text-decoration-none">
                                                <i className="fa fa-angle-right me-2"></i> {p.name}
                                            </Link>
                                        </li>
                                    ))}
                                    {(!provider.plans || provider.plans.length <= 1) && (
                                        <p className="text-muted small">No other plans available.</p>
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
    const params: { service: string; provider: string; plan: string; }[] = [];
    for (const s of services) {
        if (s.providers) {
            for (const p of s.providers) {
                if (p.plans) {
                    for (const pl of p.plans) {
                        params.push({ service: s.slug, provider: p.slug, plan: pl.slug });
                    }
                }
            }
        }
    }
    return params;
}
