import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {_id, category_name, description, image} = category;

    return (
        <div>
            <Link to={`/categories/${category_name}`}>
            <div className="card rounded-md transform transition duration-500 hover:bg-accent hover:shadow-md">
                <figure className="p-12 md:p-8">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body p-8 pt-0 md:p-6 md:pt-0 items-center text-center">
                    <h2 className="card-title text-primary font-oswald">{category_name}</h2>
                    <p className='text-sm text-justify'>{description}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default CategoryCard;