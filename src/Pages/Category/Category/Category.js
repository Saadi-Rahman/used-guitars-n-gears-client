import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from './Product';

const Category = () => {
    const products = useLoaderData();
    const [categories, setCategories] = useState([]);

        useEffect( () =>{
            fetch('http://localhost:5000/product-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        }, [])


    return (
        <div className="mx-4 md:mx-10 lg:mx-20">
            <div className="drawer drawer-mobile">
                <input id="category-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:px-4 pb-6">
                    <div className='flex justify-between'>
                        <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-4'>This category has {products.length} products</h4>
                        <label htmlFor="category-drawer-2" className="btn btn-sm btn-primary btn-outline drawer-button rounded lg:hidden">All Categories</label>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div> 

                <div className="drawer-side">
                    <label htmlFor="category-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 pt-0 w-56 md:w-64 bg-stone-300 text-base-content">
                    <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-2'>All Categories: {categories.length}</h4>
                        {
                            categories.map(category => <li key={category._id} className='mb-2'>
                                <Link to={`/category/${category._id}`}>{category.category_name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Category;