import React from 'react';
import { Link } from 'react-router-dom';
import add1 from '../../assets/guitars/acoustic1.jpg';
import add2 from '../../assets/guitars/bass1.jpg';
import add3 from '../../assets/guitars/acoustic3.jpg';
import Product from './Product';

const Category = () => {

    const categoryData = [
        {
            id: 1,
            name: 'Lindo PBEQ Piebald Burl Ash Electro-Acoustic Guitar',
            description: 'Acoustic guitars remain one of the most popular means of making music in the world and for good reason. These iconic instruments produce a rich, engrossing sound that can lead a band, accompany a singing ensemble, or inspire you to write that next hit.',
            price: 180,
            image: add1,
        },
        {
            id: 2,
            name: 'Electric Guitars',
            description: 'Electric stringed instruments most traditionally played by being worn over the shoulder (or balanced on the knee), fretted with one hand, and plucked or strummed with the other. When the strings are played, magnetic pickups take the sound and send it to an amplifier to make it louder.',
            price: 180,
            image: add2,
        },
        {
            id: 3,
            name: 'Bass Guitars',
            description: 'Bass has always been one of the most integral parts of any ensemble, and over the past several decades, the guitar form of this low-end instrument has worked its way into most every genre. Here on Reverb, browse one of the widest selections of new, used, and vintage bass guitars anywhere in the world.',
            price: 180,
            image: add3,
        },
    ]

    return (
        <div className="mx-4 md:mx-10 lg:mx-20">
            <div className="drawer drawer-mobile">
                <input id="category-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='flex justify-between'>
                        <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-4'>Category Name</h4>
                        <label htmlFor="category-drawer-2" className="btn btn-sm btn-primary btn-outline drawer-button rounded lg:hidden">All Categories</label>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            categoryData.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div> 

                <div className="drawer-side">
                    <label htmlFor="category-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 pt-0 w-56 md:w-72 bg-stone-300 text-base-content">
                    <h4 className='text-lg text-primary font-bold font-oswald uppercase mb-2'>All Categories</h4>
                    <li className='mb-2'><Link to="">Acoustic Guitars</Link></li>
                    <li className='mb-2'><Link to="">Electric Guitars</Link></li>
                    <li className='mb-2'><Link to="">Bass Guitars</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Category;