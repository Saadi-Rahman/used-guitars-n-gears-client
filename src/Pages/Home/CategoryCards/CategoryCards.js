import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const CategoryCards = () => {
    const [categories, setCategories] = useState([])

        useEffect( () =>{
            fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        }, [])

    return (
        <div className='mx-4 lg:mx-32 mb-20'>
            <div className='text-center mt-24 mb-12'>
                <h4 className='text-xl text-primary font-bold font-oswald uppercase mb-1'>Choose A Category</h4>
                <h2 className='text-xl text-secondary font-oswald mb-8'>Find guitars from the largest collection of Used Guitars N Gears. Choose a category to buy your dream Guitar.</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCards;