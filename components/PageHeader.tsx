import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
    title: string;
    breadcrumbs: { label: string; href?: string; active?: boolean }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
    return (
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <h1 className="display-4 animated slideInDown mb-4">{title}</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb mb-0">
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index} className={`breadcrumb-item ${crumb.active ? 'active' : ''}`} aria-current={crumb.active ? 'page' : undefined}>
                                {crumb.active ? (
                                    crumb.label
                                ) : (
                                    <Link href={crumb.href || '#'}>{crumb.label}</Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default PageHeader;
