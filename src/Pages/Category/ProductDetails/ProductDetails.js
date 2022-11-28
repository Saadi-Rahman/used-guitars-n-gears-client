import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../../assets/guitars/acoustic3.jpg';
import BookingModal from '../BookingModal/BookingModal';

const ProductDetails = () => {
    return (
        <div className="hero px-2 md:px-8 lg:px-16 pb-8">
            <div className="hero-content flex-col lg:flex-row gap-14">
                <img src={image} className="w-11/12 md:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h4 className='text-2xl text-secondary font-oswald mb-4'>Lindo PBEQ Piebald Burl Ash Electro-Acoustic Guitar</h4>
                    <h2 className='text-xl text-primary font-oswald font-semibold'>Price: $190</h2>
                    <p className='text-sm font-semibold text-secondary mb-4'>Original Price: $395</p>
                    <p className='font-semibold text-secondary'>Condition: <span className='font-normal text-dark'>Used</span></p>
                    <p className='font-semibold text-secondary'>Condition Type: <span className='font-normal text-dark'>Excellent</span></p>
                    <p className='font-semibold text-secondary'>Year of Purchase: <span className='font-normal text-dark'>2020</span></p>
                    <p className='font-semibold text-secondary mb-4'>Years of Use: <span className='font-normal text-dark'>2 Years</span></p>
                    <p className="font-semibold text-secondary">Description:</p>
                    <p>This guitar is good player's condition. The guitar is set-up and plays & sounds great. However, there is a significant amount of wood worn away on the soundboard located in the pick action area. Also, there many dings & scratches located throughout the guitar. There are several lacquer cracks located on the top of the body. Taylor hardshell case included. The case is in poor cosmetic condition. There is a significant amount of wear & tear throughout the case. In addition, 2 of the 5 case latches are broke and do not work.</p>
                    <div className='flex items-center mt-4'>
                        <p className='font-semibold'>For sale by <span className='text-primary font-bold'>Mark Don</span></p>
                        <FaCheckCircle className='text-lg text-primary pt-1 ml-2' />
                    </div>
                    <p className='text-sm'>Posted on 28 Nov 3:15 am, Denver, Colorado, USA</p>
                    <div className='my-6'>
                        <label
                            htmlFor="booking-modal" 
                            className="btn btn-sm btn-primary rounded mr-4"
                        >Booking</label>
                        <Link to="/category" className="btn btn-sm btn-primary rounded btn-outline">Back to Category</Link>
                    </div>
                </div>
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default ProductDetails;