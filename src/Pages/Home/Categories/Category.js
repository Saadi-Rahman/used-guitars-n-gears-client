import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name, description, image} = category;

    return (
        <div>
            <Link to="/">
            <div className="card rounded-md transform transition duration-500 hover:bg-accent hover:shadow-md">
                <figure className="px-8 pt-8">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body p-4 items-center text-center">
                    <h2 className="card-title text-primary font-oswald">{name}</h2>
                    <p className='text-sm text-justify pb-4'>{description}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Category;