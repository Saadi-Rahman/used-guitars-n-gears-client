import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const [deleteNewProduct, setDeleteNewProduct] = useState(null);

    const closeModal = () => {
        setDeleteNewProduct(null);
    }


    const {data: newProducts, isLoading, refetch } = useQuery({
        queryKey: ['newProducts'],
        queryFn: async () => {
            try{
                const res = await fetch('https://used-guitars-n-gears-server.vercel.app/newProducts', {
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


    const handleDeleteNewProduct = newProduct => {
        fetch(`https://used-guitars-n-gears-server.vercel.app/newProducts/${newProduct._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`${newProduct.title} deleted successfully!`)
            }
        })
    }


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
                            newProducts.map((newProduct, i) => <tr key={newProduct._id} className="hover:bg-accent">
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
                                    <label onClick={() => setDeleteNewProduct(newProduct)} htmlFor="confirm-modal" className="btn btn-xs btn-square btn-outline btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteNewProduct && 
                <ConfirmModal
                    title={`Are you sure you want to delete?`}
                    message = {`If you delete ${deleteNewProduct.title}, it cannot be undone!`}
                    successAction = {handleDeleteNewProduct}
                    successBtnName = "Delete"
                    modalData = {deleteNewProduct}
                    closeModal={closeModal}
                ></ConfirmModal>
            }
        </div>
    );
};

export default MyProducts;