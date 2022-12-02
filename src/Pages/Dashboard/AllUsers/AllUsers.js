import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successful!')
                refetch();
            }
        })
    }

    return (
        <div>
            <div className='flex justify-between'>
                <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-4'>All Users</h4>
                <label htmlFor="category-drawer-2" className="btn btn-sm btn-primary btn-outline drawer-button rounded font-oswald lg:hidden">Dashboard Menu</label>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr className='text-primary bg-stone-400'>
                        <th className="bg-transparent"></th>
                        <th className="bg-transparent">Name</th>
                        <th className="bg-transparent">Email</th>
                        <th className="bg-transparent">Admin</th>
                        <th className="bg-transparent">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr 
                                key={user._id}
                                className="hover:bg-accent text-sm">
                                    <th className="bg-transparent">{i+1}</th>
                                    <td className="bg-transparent">{user.name}</td>
                                    <td className="bg-transparent">{user.email}</td>
                                    <td className="bg-transparent">
                                        { user?.role !== 'admin' && 
                                            <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-outline btn-primary'>Make Admin</button> 
                                        }
                                    </td>
                                    <td className="bg-transparent">
                                        <button className="btn btn-xs btn-square btn-outline btn-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;