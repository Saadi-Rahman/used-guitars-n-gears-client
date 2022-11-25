import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo1.png';

const Header = () => {

    const menuItems = <React.Fragment>
        <li><Link to="/" className="btn btn-ghost rounded-lg font-bold text-primary mr-1">Home</Link></li>
        <li><Link to="/about" className="btn btn-ghost font-bold text-primary mr-1">About</Link></li>
        <li><Link to="/blog" className="btn btn-ghost font-bold text-primary mr-1">Blog</Link></li>
        <li><Link to="/login" className="btn btn-ghost rounded-lg font-bold text-primary mr-1">Login</Link></li>
    </React.Fragment>

    return (
        <div className="navbar flex justify-between px-4 lg:px-6">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/"><img className='w-36 md:w-4/12 py-4' src={logo} alt="" /></Link>
            </div>
            <div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="dropdown dropdown-end ml-3">
                    <label tabIndex={2} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex={3} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge bg-primary text-white text-xs">Seller</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
            {/* <label htmlFor="dashboard-drawer" tabIndex={4} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}
        </div>
    );
};

export default Header;