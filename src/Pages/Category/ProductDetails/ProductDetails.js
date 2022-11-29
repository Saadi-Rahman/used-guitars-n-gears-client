import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const {_id, category_id, title, resale_price, original_price, image_url, condition, condition_type, year_of_purchase, years_of_use, seller_name, posted_time, location, description} = productDetails;
    const [selectedProduct, setSelectedProduct] = useState(null);


    return (
        <div className="hero px-2 md:px-8 lg:px-16 pb-8">
            <div className="hero-content flex-col lg:flex-row gap-14">
                <img src={image_url} className="w-11/12 md:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h4 className='text-2xl text-secondary font-oswald mb-4'>{title}</h4>
                    <h2 className='text-xl text-primary font-oswald font-semibold'>Price: ${resale_price}</h2>
                    <p className='text-sm font-semibold text-secondary mb-4'>Original Price: ${original_price}</p>
                    <p className='font-semibold text-secondary'>Condition: <span className='font-normal text-dark'>{condition}</span></p>
                    <p className='font-semibold text-secondary'>Condition Type: <span className='font-normal text-dark'>{condition_type}</span></p>
                    <p className='font-semibold text-secondary'>Year of Purchase: <span className='font-normal text-dark'>{year_of_purchase}</span></p>
                    <p className='font-semibold text-secondary mb-4'>Years of Use: <span className='font-normal text-dark'>{years_of_use}</span></p>
                    <p className="font-semibold text-secondary">Description:</p>
                    <p>{description}</p>
                    <div className='flex items-center mt-4'>
                        <p className='font-semibold'>For sale by <span className='text-primary font-bold'>{seller_name}</span></p>
                        <FaCheckCircle className='text-lg text-primary pt-1 ml-2' />
                    </div>
                    <p className='text-sm'>Posted on {posted_time}, {location}</p>
                    <div className='my-6'>
                        <label
                            onClick={() => setSelectedProduct(productDetails)}
                            htmlFor="booking-modal" 
                            className="btn btn-sm btn-primary rounded mr-4"
                        >Booking</label>
                        <Link to={`/category/${category_id}`} className="btn btn-sm btn-primary rounded btn-outline">Go Back</Link>
                    </div>
                </div>
            </div>
            {
                selectedProduct &&
                <BookingModal
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default ProductDetails;