import React from 'react';
import brand1 from '../../../assets/images/Ibanez.jpg';
import brand2 from '../../../assets/images/Yamaha.jpg';
import brand3 from '../../../assets/images/Fender.jpg';
import brand4 from '../../../assets/images/Gibson.jpg';

const Brands = () => {
    return (
        <div className='mx-4 lg:mx-20 mt-24'>
            <h4 className='text-lg text-primary text-center font-bold uppercase'>Popular Brands</h4>
            <h2 className='text-2xl text-secondary text-center font-semibold mb-4'>Here are some popular brands our customers mostly choose to buy or sell.</h2>

            <section className="container px-4 py-6 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-full">
                        <div className="border-2 border-gray-600 p-2 rounded-lg transform transition duration-500 hover:scale-110">
                            <img src={brand1} alt="" />
                        </div>
                    </div>
                    <div className="p-4 sm:w-1/4 w-full">
                        <div className="border-2 border-gray-600 p-2 rounded-lg transform transition duration-500 hover:scale-110">
                            <img src={brand2} alt="" />
                        </div>
                    </div>
                    <div className="p-4 sm:w-1/4 w-full">
                        <div className="border-2 border-gray-600 p-2 rounded-lg transform transition duration-500 hover:scale-110">
                            <img src={brand3} alt="" />
                        </div>
                    </div>
                    <div className="p-4 sm:w-1/4 w-full">
                        <div className="border-2 border-gray-600 p-2 rounded-lg transform transition duration-500 hover:scale-110">
                            <img src={brand4} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brands;