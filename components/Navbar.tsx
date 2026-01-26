"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    useEffect(() => {
        // Force the navbar to be visible after component mounts
        const navbarCollapse = document.getElementById('navbarCollapse');
        if (navbarCollapse) {
            navbarCollapse.classList.add('show');
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5" style={{ top: 0 }}>
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
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* Removed 'collapse' class and forced display */}
            <div className="navbar-collapse" id="navbarCollapse" style={{ display: 'block' }}>
                <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0" style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
                    <a href="/" className="nav-item nav-link active" style={{ color: 'var(--dark)', fontWeight: '500', padding: '0.5rem 1rem' }}>Home</a>
                    <a href="/about" className="nav-item nav-link" style={{ color: 'var(--dark)', fontWeight: '500', padding: '0.5rem 1rem' }}>About Us</a>
                    <a href="/service" className="nav-item nav-link" style={{ color: 'var(--dark)', fontWeight: '500', padding: '0.5rem 1rem' }}>Our Services</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ color: 'var(--dark)', fontWeight: '500', padding: '0.5rem 1rem' }}>Pages</a>
                        <div className="dropdown-menu bg-light border-0 m-0">
                            <a href="/feature" className="dropdown-item">Features</a>
                            <a href="/appointment" className="dropdown-item">Appointment</a>
                            <a href="/team" className="dropdown-item">Team Members</a>
                            <a href="/testimonial" className="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <a href="/contact" className="nav-item nav-link" style={{ color: 'var(--dark)', fontWeight: '500', padding: '0.5rem 1rem' }}>Contact Us</a>
                </div>
            </div>
            <a href="" className="btn btn-primary px-3 d-none d-lg-block">Get A Quote</a>
        </nav>
    );
};

export default Navbar;
