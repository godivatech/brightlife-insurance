import React from 'react';

const VideoSection = () => {
    return (
        <div className="container-xxl py-5 bg-light">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className="display-6 mb-3">Why Insurance Matters</h1>
                    <p className="fs-5 text-primary mb-5">Hear from our Managing Director, S. Sonai</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden shadow-lg">
                            <video
                                className="w-100"
                                controls
                                style={{ borderRadius: '10px', display: 'block' }}
                            >
                                <source src="/videos/1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
