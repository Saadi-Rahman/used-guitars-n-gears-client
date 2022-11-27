import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/guitars/acoustic3.jpg';

const ProductDetails = () => {
    return (
        <div className="hero px-2 md:px-8 lg:px-16 pb-8">
            <div className="hero-content flex-col lg:flex-row gap-14">
                <img src={image} className="w-11/12 md:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h4 className='text-2xl text-primary font-oswald mb-4'>Lindo PBEQ Piebald Burl Ash Electro-Acoustic Guitar</h4>
                    <h2 className='text-xl text-secondary font-oswald'>Price: $190</h2>
                    <p className='font-semibold mb-4'>Used - Excellent</p>
                    <p className='font-semibold mb-1'>Year of purchase: 2020</p>
                    <p className='font-semibold mb-4'>Location: Denver, Colorado</p>
                    <p className="font-semibold">Description:</p>
                    <p>Previously Owned 2002 Taylor 714ce Grand Auditorium Acoustic/Electric Guitar. This guitar is good player's condition. The guitar is set-up and plays & sounds great. However, there is a significant amount of wood worn away on the soundboard located in the pick action area. Also, there many dings & scratches located throughout the guitar. There are several lacquer cracks located on the top of the body. Taylor hardshell case included. The case is in poor cosmetic condition. There is a significant amount of wear & tear throughout the case. In addition, 2 of the 5 case latches are broke and do not work.</p>
                    <div className='my-6'>
                        <button className="btn btn-sm btn-primary rounded mr-4">Booking</button>
                        <Link to="/category" className="btn btn-sm btn-primary rounded btn-outline">Back to Category</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;