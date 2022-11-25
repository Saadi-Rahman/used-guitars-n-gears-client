import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../../assets/images/bg-img3.jpg';

const Footer = () => {
    return (
        <footer style={{  
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className='footer p-12'>
                <div>
                    <span className="text-lg text-accent font-bold">Services</span> 
                    <Link to="/" className="text-accent link link-hover">Branding</Link>
                    <Link to="/" className="text-accent link link-hover">Design</Link>
                    <Link to="/" className="text-accent link link-hover">Marketing</Link>
                    <Link to="/" className="text-accent link link-hover">Advertisement</Link>
                </div> 
                <div>
                    <span className="text-lg text-accent font-bold">Company</span> 
                    <Link to="/" className="text-accent link link-hover">About us</Link>
                    <Link to="/" className="text-accent link link-hover">Contact</Link>
                    <Link to="/" className="text-accent link link-hover">Jobs</Link>
                    <Link to="/" className="text-accent link link-hover">Press kit</Link>
                </div> 
                <div>
                    <span className="text-lg text-accent font-bold">Legal</span> 
                    <Link to="/" className="text-accent link link-hover">Terms of use</Link>
                    <Link to="/" className="text-accent link link-hover">Privacy policy</Link>
                    <Link to="/" className="text-accent link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-sm text-accent text-center py-6'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;