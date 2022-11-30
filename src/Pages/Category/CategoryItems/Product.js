import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, title, resale_price, image_url, condition, condition_type, posted_time, location} = product;

    return (
        <div>
            <Link to={`/productDetails/${_id}`}>
            <div style={{height: "420px"}} className="card rounded shadow-xl transform transition duration-500 hover:bg-accent">
                <figure className="h-64">
                    <img src={image_url} alt="Shoes" className="rounded" />
                </figure>
                <div className="p-3">
                    <h4 className="text-secondary font-oswald pb-2">{title}</h4>
                    <h2 className='text-lg text-primary font-bold font-oswald'>Price: ${resale_price}</h2>
                    <p className='text-xs font-semibold'>{condition} - {condition_type}</p>
                    <div className='fixed bottom-4'>
                        <small>{posted_time} | {location}</small>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Product;