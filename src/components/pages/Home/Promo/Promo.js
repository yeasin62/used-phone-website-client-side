import React from 'react';

const Promo = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno8-pro-5g-en/navigation/reno8-pro-glazed-green-427_600-pc.png.thumb.webp" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Black Friday Big Offer</h1>
                <p className="py-6">Flash sale 70% discount of all Oppo Smart phones. Grab your product right now. This offer valids only 25 Nov, 2022</p>
                <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Promo;