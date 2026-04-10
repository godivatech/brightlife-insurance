"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    // Mobile view detection for logo logic
    const [isMobile, setIsMobile] = useState(false);

    // Force scroll to top on route change
    React.useEffect(() => {
        window.scrollTo(0, 0);
        setIsScrolled(false);
    }, [pathname]);

    // Close menu when resizing to desktop view and detect mobile
    React.useEffect(() => {
        const handleResize = () => {
            // Standard Bootstrap break point is 992px
            const width = window.innerWidth;
            if (width >= 992) {
                setIsOpen(false);
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Initial check
        handleResize();
        handleScroll();

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-light modern-navbar sticky-top px-4 px-lg-5 ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <style jsx>{`
                .modern-navbar {
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    z-index: 9999;
                }
                .custom-nav-link {
                    position: relative;
                    color: var(--dark) !important;
                    font-weight: 500 !important;
                    transition: all 0.3s ease;
                }
                .custom-quote-btn {
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 10px rgba(1, 95, 201, 0.2);
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }
                .custom-quote-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 15px rgba(1, 95, 201, 0.35);
                }
                
                /* Desktop Default styling - Dynamic Navbar */
                @media (min-width: 992px) {
                    /* Initial Flush State */
                    .modern-navbar {
                        top: 0 !important;
                        width: 100%;
                        background: transparent !important;
                        padding: 20px 40px !important;
                        box-shadow: none;
                        border-bottom: 1px solid transparent;
                    }
                    .responsive-logo {
                        max-height: 70px;
                        transition: all 0.4s ease;
                    }
                    
                    /* Scrolled Transition State -> Simple Sticky */
                    .modern-navbar.navbar-scrolled {
                        top: 0 !important;
                        width: 100%;
                        max-width: none;
                        border-radius: 0;
                        background: #ffffff !important;
                        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
                        padding: 10px 40px !important;
                    }
                    .modern-navbar.navbar-scrolled .responsive-logo {
                        max-height: 60px;
                    }
                    
                    /* Modern capsule-style hover for links on desktop */
                    .custom-nav-link {
                        border-radius: 20px;
                        padding: 8px 18px !important;
                        margin: 0 5px;
                        background: transparent;
                        color: var(--dark) !important;
                    }
                    .custom-nav-link:hover, .custom-nav-link.active {
                        background: rgba(1, 95, 201, 0.08) !important;
                        color: var(--primary) !important;
                    }
                    /* Ensure no underline on desktop */
                    .custom-nav-link::after {
                        display: none !important;
                    }
                }
                
                /* Mobile Styling */
                @media (max-width: 991.98px) {
                    .modern-navbar {
                        top: 0 !important;
                        background: #fff !important;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
                    }
                    .responsive-logo {
                        max-height: 50px !important;
                        width: auto !important;
                    }
                    /* Ensure collapse works smoothly */
                    .mobile-collapse {
                        display: block !important;
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.35s ease-in-out, opacity 0.35s ease-in-out;
                        opacity: 0;
                        width: 100%; /* Full width when inside container */
                    }
                    .mobile-collapse.show {
                        max-height: 500px; 
                        opacity: 1;
                    }
                    .mobile-nav-container {
                        background-color: #f8f9fa;
                        border-radius: 10px;
                        padding: 15px;
                        margin-top: 15px;
                    }
                    .custom-nav-link {
                        margin: 5px 0;
                        padding-left: 10px !important;
                        background: transparent !important;
                    }
                    .custom-nav-link:hover, .custom-nav-link.active {
                        color: var(--primary) !important;
                    }
                    /* Optional underline effect on mobile */
                    .custom-nav-link::after {
                        display: none; 
                    }
                }
            `}</style>

            <div className="container-fluid">
                <Link href="/" className="navbar-brand d-flex align-items-center">
                    <h1 className="m-0 d-flex align-items-center">
                        <img
                            className="img-fluid responsive-logo"
                            src="/img/Logo.jpeg"
                            alt="Bright Life Insurance"
                            // Inline fallback for desktop, overridden by CSS !important on mobile
                            style={{ maxHeight: '65px' }}
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
                    <div className="navbar-nav mx-auto mobile-nav-container">
                        <Link href="/" className={`nav-link custom-nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/about" className={`nav-link custom-nav-link ${pathname === '/about' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            About Us
                        </Link>
                        <Link href="/service" className={`nav-link custom-nav-link ${pathname?.startsWith('/service') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            Our Services
                        </Link>
                        <Link href="/contact" className={`nav-link custom-nav-link ${pathname === '/contact' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            Contact Us
                        </Link>
                    </div>
                    <Link href="/appointment" className="btn btn-primary rounded-pill px-4 py-2 mt-3 mt-lg-0 text-white custom-quote-btn" onClick={() => setIsOpen(false)}>
                        Get A Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
