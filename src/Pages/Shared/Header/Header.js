import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../assets/icons/logo1.png';
import userIcon from '../../../assets/icons/user-icon.png';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/" className="btn btn-ghost rounded lg:text-lg font-oswald text-primary mr-1">Home</Link></li>
        <li><Link to="/about" className="btn btn-ghost rounded lg:text-lg font-oswald text-primary mr-1">About</Link></li>
        <li><Link to="/blog" className="btn btn-ghost rounded lg:text-lg font-oswald text-primary mr-1">Blog</Link></li>
        {/* <li><Link to="/dashboard" className="btn btn-ghost rounded lg:text-lg font-oswald text-primary mr-1">Dashboard</Link></li> */}
    </React.Fragment>

    return (
        <div className="navbar flex justify-between px-4 md:px-10 lg:px-20 py-12">
            {/* navbar for medium and small devices */}
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost rounded lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-100 rounded-box w-48">
                        {menuItems}
                    </ul>
                </div>
                <div className='w-32 md:w-5/12'>
                    <Link to="/"><img className='w-full' src={logo} alt="" /></Link>
                </div>
            </div>
            
            {/* navbar for large devices */}
            <div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex items-center'>
                    {user?.uid ?
                        <div className="dropdown dropdown-end ml-3 pt-2">
                            <label tabIndex={2} className="btn btn-ghost btn-circle avatar">
                                <div className="w-full rounded-full">
                                <img src={userIcon} alt='' />
                                </div>
                            </label>
                            <ul tabIndex={3} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-stone-100 rounded-box w-48">
                                <li>
                                <Link to="" className="justify-between font-oswald">
                                    {user?.displayName}
                                    <span className="badge bg-primary text-white text-xs font-sans">Buyer</span>
                                </Link>
                                </li>
                                <li><Link to="/dashboard" className='font-oswald'>Dashboard</Link></li>
                                <li><button onClick={handleLogOut} className='font-oswald'>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <div>
                            <ul className='menu menu-horizontal'>
                                <li><Link to="/login" className="btn btn-ghost rounded lg:text-lg font-oswald text-primary">Login</Link></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            {/* <label htmlFor="dashboard-drawer" tabIndex={4} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}
        </div>
    );
};

export default Header;