import React from 'react';
import banner from '../../assets/images/side-banner.jpg';

const About = () => {
    return (
        <div className="hero px-2 md:px-8 lg:px-16 mb-4">
            <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h4 className='text-xl text-primary font-bold font-oswald uppercase mb-2'>About Us</h4>
                    <h2 className='text-xl text-secondary font-oswald'>Used Guitars N Gears is a retail musical instrument store located in Catonsville, "Music City" Maryland. </h2>
                    <p className="py-6">We buy, sell and trade quality used gear all day, every day, providing the ultimate used gear resource for musicians. With more than 30,000 items available online, we offer the highest quality used products on the market. Visit any of our locations to see our huge selection of products for sale; bring in your used gear to sell or trade, or browse all of our items online at any time. <br /> <br />
                    Bill's interest in music started with the introduction of Rock n' Roll in the 1990's and more specifically with Elvis, the Beatles and Rolling Stones. He learned how to play their songs on guitar and then started going to people's homes and giving them guitar lessons. <br /> <br />
                    In 1965, Bill and his wife Nancy rented a small 8x8 room behind a coin shop on Frederick Road in Catonsville, MD, and started teaching music lessons there. Eventually, they took over that space, and in addition to teaching guitar lessons, began selling accessories and a few instruments.</p>
                    <button className="btn btn-primary">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default About;