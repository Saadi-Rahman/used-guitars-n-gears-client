import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt='' className="w-full rounded-md" />
            </div>
            <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-10 md:left-24 top-1/2">
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-accent leading-none md:leading-tight'>
                    Find Your <br /> Dream Guitar!
                </h1>
                <div className='w-3/4 py-2 md:py-6'>
                    <p className='text-xs md:text-xl text-accent'>Used Guitars N Gears Is The World's Largest Musical Instrument Resale Franchise With Retail Locations Throughout The U.S.</p>
                </div>
                <div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary base-bg-color mr-3 md:mr-5 text-accent">Buy Guitar</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md glass text-accent">Sell Guitar</button>
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-sm md:btn-md btn-circle mr-2 md:mr-4">❮</a> 
                <a href={`#slide${next}`} className="btn btn-sm md:btn-md btn-circle">❯</a>
            </div>
        </div> 
    );
};

export default BannerItem;