import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../../assets/images/bg-footer1.jpg';

const Footer = () => {
    return (
        <footer className='mt-20' style={{  
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className='footer p-12 lg:p-20'>
                <div>
                    <span className="text-xl text-white font-oswald">Services</span> 
                    <Link to="/" className="text-white link link-hover">Branding</Link>
                    <Link to="/" className="text-white link link-hover">Design</Link>
                    <Link to="/" className="text-white link link-hover">Marketing</Link>
                    <Link to="/" className="text-white link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="text-xl text-white font-oswald">Company</span> 
                    <Link to="/" className="text-white link link-hover">About us</Link>
                    <Link to="/" className="text-white link link-hover">Contact</Link>
                    <Link to="/" className="text-white link link-hover">Jobs</Link>
                    <Link to="/" className="text-white link link-hover">Press kit</Link>
                </div> 
                <div>
                    <span className="text-xl text-white font-oswald">Legal</span> 
                    <Link to="/" className="text-white link link-hover">Terms of use</Link>
                    <Link to="/" className="text-white link link-hover">Privacy policy</Link>
                    <Link to="/" className="text-white link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-sm text-accent text-center pb-6 px-4'>
                <p>Copyright © 2022 - All right reserved by Used Guitars N Gears Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;