import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="mx-4 md:mx-10 lg:mx-20">
                <div className="drawer drawer-mobile">
                    <input id="category-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content lg:px-4 pb-6">
                        <div className='flex justify-between'>
                            {/* <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-4'>Dashboard</h4> */}
                            <label htmlFor="category-drawer-2" className="btn btn-sm btn-primary btn-outline drawer-button rounded lg:hidden">Menu</label>
                        </div>
                        <Outlet></Outlet>
                    </div> 

                    <div className="drawer-side">
                        <label htmlFor="category-drawer-2" className="drawer-overlay"></label> 
                        <ul className="menu p-4 pt-0 w-56 md:w-64 bg-stone-300 text-base-content">
                        <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-2'>Dashboard Menu</h4>
                        <li className='mb-2'><Link to="">My Orders</Link></li>
                        <li className='mb-2'><Link to="">Add A Product</Link></li>
                        <li className='mb-2'><Link to="">My Products</Link></li>
                        <li className='mb-2'><Link to="">My Buyers</Link></li>
                        <li className='mb-2'><Link to="">All Sellers</Link></li>
                        <li className='mb-2'><Link to="">All Buyers</Link></li>
                        <li className='mb-2'><Link to="">Reported Items</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;