import React from 'react';
import { FaCommentsDollar, FaRegListAlt, FaShippingFast } from 'react-icons/fa';

const InfoCards = () => {
    return (
        <div>
            <div className='mx-4 lg:mx-6 mb-6'>
                <h4 className='text-xl text-primary font-bold font-oswald uppercase'>Sell your Guitar</h4>
                <h2 className='text-xl text-secondary font-oswald'>You are just 3 steps away to sell! </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-6 mb-20'>
                <div className="card card-side text-white shadow-xl p-4 rounded-md bg-gradient-to-r from-primary to-secondary">
                    <figure className='md:w-28 mx-2'>
                        <FaRegListAlt className="w-16 md:w-12" />
                    </figure>
                    <div className="card-body p-2">
                        <h2 className="card-title">List It</h2>
                        <p>Data from past sales makes it easy to list your item at the right price.</p>
                    </div>
                </div>

                <div className="card card-side text-white shadow-xl p-4 rounded-md bg-neutral">
                    <figure className='md:w-28 mx-2'>
                        <FaCommentsDollar className="w-16 md:w-12" />
                    </figure>
                    <div className="card-body p-2">
                        <h2 className="card-title">Sell It</h2>
                        <p>Millions of high-quality buyers from all over the world search for gear on Guitars N Gears.</p>
                    </div>
                </div>

                <div className="card card-side text-white shadow-xl p-4 rounded-md bg-gradient-to-r from-primary to-secondary">
                    <figure className='md:w-28 mx-2'>
                        <FaShippingFast className="w-16 md:w-12" />
                    </figure>
                    <div className="card-body p-2">
                        <h2 className="card-title">Ship It</h2>
                        <p>From boxes & discounted labels to packing guides, we make it easy to ship gear.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;