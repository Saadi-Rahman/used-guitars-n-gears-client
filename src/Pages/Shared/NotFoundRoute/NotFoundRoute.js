import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/not-found.png';

const NotFoundRoute = () => {
    return (
        <div className='hero flex flex-col justify-center items-center h-screen'> 
            <div>
                <img className='w-4/5 md:w-10/12' src={img} alt="" />
            </div>
            <p className='text-4xl font-bold text-primary pb-2'>404 Not Found!</p>
            <p>Woops!! Looks like this page doesn't exist!</p>
            <p>Back to <Link to="/" className="link link-hover text-primary font-semibold">Home</Link></p>
        </div>
    );
};

export default NotFoundRoute;