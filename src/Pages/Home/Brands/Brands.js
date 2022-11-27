import React from 'react';
import brand1 from '../../../assets/images/Ibanez.jpg';
import brand2 from '../../../assets/images/Yamaha.jpg';
import brand3 from '../../../assets/images/Jackson.jpg';
import brand4 from '../../../assets/images/Fender.jpg';
import brand5 from '../../../assets/images/Gibson.jpg';

const Brands = () => {
    return (
        <div className='mx-4 lg:mx-20 mt-24'>
            <h4 className='text-xl text-primary text-center font-bold font-oswald uppercase'>Popular Brands</h4>
            <h2 className='text-xl text-secondary text-center font-oswald mb-4'>Here are some popular brands that our customers mostly choose to buy or sell.</h2>

            <section className="container md:px-4 py-6 mx-auto">
                <div className="flex flex-wrap justify-center -m-4 gap-2 md:gap-4">
                    <div className="w-1/6 w-full">
                        <div className="border-2 border-gray-600 p-1 md:p-2 rounded transform transition duration-500 hover:scale-110">
                            <img src={brand1} alt="" />
                        </div>
                    </div>
                    <div className="w-1/6 w-full">
                        <div className="border-2 border-gray-600 p-1 md:p-2 rounded transform transition duration-500 hover:scale-110">
                            <img src={brand2} alt="" />
                        </div>
                    </div>
                    <div className="w-1/6 w-full">
                        <div className="border-2 border-gray-600 p-1 md:p-2 rounded transform transition duration-500 hover:scale-110">
                            <img src={brand3} alt="" />
                        </div>
                    </div>
                    <div className="w-1/6 w-full">
                        <div className="border-2 border-gray-600 p-1 md:p-2 rounded transform transition duration-500 hover:scale-110">
                            <img src={brand4} alt="" />
                        </div>
                    </div>
                    <div className="w-1/6 w-full">
                        <div className="border-2 border-gray-600 p-1 md:p-2 rounded transform transition duration-500 hover:scale-110">
                            <img src={brand5} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brands;