import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name, price, image} = product;

    return (
        <div>
            <Link to="">
            <div style={{height: "420px"}} className="card rounded shadow-xl transform transition duration-500 hover:bg-accent">
                <figure className="h-64">
                    <img src={image} alt="Shoes" className="rounded" />
                </figure>
                <div className="p-3">
                    <h4 className="text-secondary font-oswald pb-2">{name}</h4>
                    <h2 className='text-xl text-primary font-bold font-oswald'>Price: ${price}</h2>
                    <small>Used - Excellent</small>
                    <p className='text-sm pt-1 font-semibold'>Denver, Colorado</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Product;