import React from 'react';

const MyProducts = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-4'>My Products</h4>
                <label htmlFor="category-drawer-2" className="btn btn-sm btn-primary btn-outline drawer-button rounded font-oswald lg:hidden">Dashboard Menu</label>
            </div>
        </div>
    );
};

export default MyProducts;