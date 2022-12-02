import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className='flex justify-between'>
                <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-4'>My Orders</h4>
                <label htmlFor="category-drawer-2" className="btn btn-sm btn-primary btn-outline drawer-button rounded font-oswald lg:hidden">Dashboard Menu</label>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr className='text-primary bg-stone-400'>
                        <th className="bg-transparent"></th>
                        <th className="bg-transparent">Name</th>
                        <th className="bg-transparent">Product</th>
                        <th className="bg-transparent">Price</th>
                        <th className="bg-transparent">location</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bookings && 
                            bookings?.map((booking, i) => <tr 
                                key={booking._id}
                                className="hover:bg-accent text-sm">
                                    <th className="bg-transparent">{i+1}</th>
                                    <td className="bg-transparent">{booking.buyer}</td>
                                    <td className="bg-transparent">{booking.selectedProduct}</td>
                                    <td className="bg-transparent">${booking.price}</td>
                                    <td className="bg-transparent">{booking.location}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;