import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Header></Header>
            <div className="mx-4 md:mx-10 lg:mx-20">
                <div className="drawer drawer-mobile">
                    <input id="category-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content lg:px-4 pb-6">
                        <Outlet></Outlet>
                    </div> 

                    <div className="drawer-side">
                        <label htmlFor="category-drawer-2" className="drawer-overlay"></label> 
                        <ul className="menu p-4 pt-0 w-56 md:w-64 bg-stone-300 text-base-content">
                        <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-2'>Dashboard Menu</h4>
                            <li className='mb-2 font-oswald text-secondary'><Link to="/dashboard">My Orders</Link></li>
                            <li className='mb-2 font-oswald text-secondary'><Link to="/dashboard/addProduct">Add A Product</Link></li>
                            <li className='mb-2 font-oswald text-secondary'><Link to="/dashboard/myProducts">My Products</Link></li>
                            <li className='mb-2 font-oswald text-secondary'><Link to="/dashboard/myBuyers">My Buyers</Link></li>
                            {
                                isAdmin && <>
                                    <li className='mb-2 font-oswald text-secondary'><Link to="/dashboard/allUsers">All Users</Link></li>
                                    <li className='mb-2 font-oswald text-secondary'><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;