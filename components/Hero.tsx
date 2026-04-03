import React from 'react';

const Hero = () => {
    return (
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100 d-none d-md-block" src="/img/carousel-1.jpeg" alt="Image" />
                        <img className="w-100 d-block d-md-none" src="/img/carouse-1 mobile.jpeg" alt="Image" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="/img/carousel-3.jpeg" alt="Image" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Hero;
