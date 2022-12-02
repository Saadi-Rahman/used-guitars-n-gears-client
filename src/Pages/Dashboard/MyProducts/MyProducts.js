import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const {data: newProducts, isLoading } = useQuery({
        queryKey: ['newProducts'],
        queryFn: async () => {
            try{
                const res = await fetch('http://localhost:5000/newProducts', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='flex justify-between'>
                <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-4'>My Products: {newProducts?.length}</h4>
                <label htmlFor="category-drawer-2" className="btn btn-sm btn-primary btn-outline drawer-button rounded font-oswald lg:hidden">Dashboard Menu</label>
            </div>

            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr className='text-primary bg-stone-400'>
                    <th className="bg-transparent"></th>
                    <th className="bg-transparent">Avatar</th>
                    <th className="bg-transparent">Product Name</th>
                    <th className="bg-transparent">Price</th>
                    <th className="bg-transparent">Location</th>
                    <th className="bg-transparent">Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        newProducts.map((newProduct, i) => <tr key={newProduct._id}>
                            <th className="bg-transparent">{i+1}</th>
                            <td className="bg-transparent">
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={newProduct.image_url} alt="" />
                                    </div>
                                </div>
                            </td>
                            <td className="bg-transparent">{newProduct.title}</td>
                            <td className="bg-transparent">{newProduct.resale_price}</td>
                            <td className="bg-transparent">{newProduct.location}</td>
                            <td className="bg-transparent">
                                <label className="btn btn-xs btn-outline btn-error">Delete</label>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyProducts;