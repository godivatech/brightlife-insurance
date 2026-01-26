"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when resizing to desktop view
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5" style={{ top: 0 }}>
            {/* Custom CSS for smooth mobile toggle animation */}
            <style jsx>{`
                @media (max-width: 991.98px) {
                    .mobile-collapse {
                        display: block !important;
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.35s ease-in-out, opacity 0.35s ease-in-out;
                        opacity: 0;
                    }
                    .mobile-collapse.show {
                        max-height: 500px; /* Approximate height for menu */
                        opacity: 1;
                    }
                }
            `}</style>

            <Link href="/" className="navbar-brand d-flex align-items-center">
                <h1 className="m-0 d-flex align-items-center">
                    <img
                        className="img-fluid"
                        src="/img/Logo.jpeg"
                        alt="Bright Life Insurance"
                        style={{ maxHeight: '80px' }}
                    />
                </h1>
            </Link>

            <button
                type="button"
                className="navbar-toggler"
                onClick={() => setIsOpen(!isOpen)}
                style={{ border: 'none', outline: 'none' }}
                aria-expanded={isOpen}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse mobile-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
                <div className="navbar-nav mx-auto bg-light rounded px-4 py-3">
                    <a href="/" className="nav-link active" style={{ color: 'var(--dark)', fontWeight: '500' }}>
                        Home
                    </a>
                    <a href="/about" className="nav-link" style={{ color: 'var(--dark)', fontWeight: '500' }}>
                        About Us
                    </a>
                    <a href="/service" className="nav-link" style={{ color: 'var(--dark)', fontWeight: '500' }}>
                        Our Services
                    </a>
                    <a href="/contact" className="nav-link" style={{ color: 'var(--dark)', fontWeight: '500' }}>
                        Contact Us
                    </a>
                </div>
                <a href="/appointment" className="btn btn-primary px-3 mt-3 mt-lg-0">
                    Get A Quote
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
