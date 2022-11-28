import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name, price, image} = product;

    return (
        <div>
            <Link to="/productDetails">
            <div style={{height: "420px"}} className="card rounded shadow-xl transform transition duration-500 hover:bg-accent">
                <figure className="h-64">
                    <img src={image} alt="Shoes" className="rounded" />
                </figure>
                <div className="p-3">
                    <h4 className="text-secondary font-oswald pb-2">{name}</h4>
                    <h2 className='text-xl text-primary font-bold font-oswald'>Price: ${price}</h2>
                    <p className='text-xs font-semibold'>Used - Excellent</p>
                    <div className='fixed bottom-4'>
                        <small>28 Nov 2022 | Denver, Colorado</small>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Product;