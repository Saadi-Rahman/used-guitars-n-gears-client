import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const CategoryItems = () => {
    const products = useLoaderData();

    return (
        <div>
            <div className='flex justify-between'>
                <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-4'>This Category has {products.length} Guitars available</h4>
                <label htmlFor="category-drawer-2" className="btn btn-sm btn-primary btn-outline font-oswald drawer-button rounded lg:hidden">All Categories</label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    products.length && products?.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default CategoryItems;