'use client';

import React, { useState } from 'react';

interface AppointmentProps {
    isSidebar?: boolean;
}

interface FormState {
    name: string;
    email: string;
    mobile: string;
    serviceType: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    mobile?: string;
    serviceType?: string;
    message?: string;
}

const validate = (fields: FormState): FormErrors => {
    const errors: FormErrors = {};

    if (!fields.name.trim()) {
        errors.name = 'Name is required.';
    } else if (fields.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters.';
    }

    if (!fields.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
        errors.email = 'Please enter a valid email address.';
    }

    if (!fields.mobile.trim()) {
        errors.mobile = 'Mobile number is required.';
    } else if (!/^[6-9]\d{9}$/.test(fields.mobile.trim())) {
        errors.mobile = 'Enter a valid 10-digit Indian mobile number.';
    }

    if (!fields.serviceType.trim()) {
        errors.serviceType = 'Please select a service type.';
    }

    if (!fields.message.trim()) {
        errors.message = 'Message is required.';
    } else if (fields.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters.';
    }

    return errors;
};

const emptyForm: FormState = {
    name: '',
    email: '',
    mobile: '',
    serviceType: '',
    message: '',
};

const AppointmentForm: React.FC<{ isSidebar: boolean }> = ({ isSidebar }) => {
    const [form, setForm] = useState<FormState>(emptyForm);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        // Clear error on change
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate(form);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setLoading(true);
        // Simulate submission (replace with actual API call)
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setForm(emptyForm);
            setErrors({});
        }, 1000);
    };

    const prefix = isSidebar ? 'sidebar' : 'main';

    if (submitted) {
        return (
            <div className="text-center py-4">
                <div className="btn-lg-square bg-primary rounded-circle mx-auto mb-3" style={{ width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="fa fa-check text-white fa-2x"></i>
                </div>
                <h5 className="text-success mb-2">Appointment Requested!</h5>
                <p className="text-muted mb-3">Thank you! We will contact you within 24 hours.</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => setSubmitted(false)}>
                    Submit Another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="row g-3">
                {/* Name */}
                <div className={isSidebar ? 'col-12' : 'col-sm-6'}>
                    <div className="form-floating">
                        <input
                            type="text"
                            name="name"
                            className={`form-control ${errors.name ? 'is-invalid' : form.name ? 'is-valid' : ''}`}
                            id={`${prefix}-name`}
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            maxLength={60}
                        />
                        <label htmlFor={`${prefix}-name`}>Your Name *</label>
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                </div>

                {/* Email */}
                <div className={isSidebar ? 'col-12' : 'col-sm-6'}>
                    <div className="form-floating">
                        <input
                            type="email"
                            name="email"
                            className={`form-control ${errors.email ? 'is-invalid' : form.email ? 'is-valid' : ''}`}
                            id={`${prefix}-email`}
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <label htmlFor={`${prefix}-email`}>Your Email *</label>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                </div>

                {/* Mobile */}
                <div className={isSidebar ? 'col-12' : 'col-sm-6'}>
                    <div className="form-floating">
                        <input
                            type="tel"
                            name="mobile"
                            className={`form-control ${errors.mobile ? 'is-invalid' : form.mobile ? 'is-valid' : ''}`}
                            id={`${prefix}-mobile`}
                            placeholder="Your Mobile"
                            value={form.mobile}
                            onChange={handleChange}
                            maxLength={10}
                            inputMode="numeric"
                        />
                        <label htmlFor={`${prefix}-mobile`}>Your Mobile *</label>
                        {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                    </div>
                </div>

                {/* Service Type */}
                <div className={isSidebar ? 'col-12' : 'col-sm-6'}>
                    <div className="form-floating">
                        <input
                            type="text"
                            name="serviceType"
                            className={`form-control ${errors.serviceType ? 'is-invalid' : form.serviceType ? 'is-valid' : ''}`}
                            id={`${prefix}-service`}
                            placeholder="Service Type"
                            value={form.serviceType}
                            onChange={handleChange}
                        />
                        <label htmlFor={`${prefix}-service`}>Service Type *</label>
                        {errors.serviceType && <div className="invalid-feedback">{errors.serviceType}</div>}
                    </div>
                </div>

                {/* Message */}
                <div className="col-12">
                    <div className="form-floating">
                        <textarea
                            name="message"
                            className={`form-control ${errors.message ? 'is-invalid' : form.message ? 'is-valid' : ''}`}
                            placeholder="Leave a message here"
                            id={`${prefix}-message`}
                            style={{ height: isSidebar ? '80px' : '100px' }}
                            value={form.message}
                            onChange={handleChange}
                            maxLength={500}
                        />
                        <label htmlFor={`${prefix}-message`}>Message *</label>
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>
                </div>

                {/* Submit */}
                <div className="col-12">
                    <button
                        className={`btn btn-primary py-3 ${isSidebar ? 'w-100' : 'px-5'}`}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Sending...
                            </>
                        ) : 'Get Appointment'}
                    </button>
                </div>
            </div>
        </form>
    );
};

const Appointment: React.FC<AppointmentProps> = ({ isSidebar = false }) => {
    if (isSidebar) {
        return (
            <div className="bg-light rounded p-4 wow fadeIn" data-wow-delay="0.1s">
                <h4 className="mb-4">Get an Appointment</h4>
                <AppointmentForm isSidebar={true} />
            </div>
        );
    }

    return (
        <div className="container-fluid appointment my-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                        <h1 className="display-6 text-white mb-5">
                            We Are Your Trusted Insurance Partner
                        </h1>
                        <p className="text-white mb-5">
                            Contact us today to schedule a consultation with our experts. We are here to answer all your queries and help you choose the best plan.
                        </p>
                        <div className="bg-white rounded p-1">
                            <div className="d-flex align-items-center bg-primary rounded p-3">
                                <h5 className="text-white mb-0">Call Us: +91 99429 80040, +91 98941 66531</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-white rounded p-5">
                            <AppointmentForm isSidebar={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
