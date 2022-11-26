import React from 'react';
import Category from './Category';
import guitar1 from '../../../assets/images/guitar1.png';
import guitar2 from '../../../assets/images/guitar2.png';
import guitar3 from '../../../assets/images/guitar3.png';

const Categories = () => {

        const categoriesData = [
            {
                id: 1,
                name: 'Acoustic Guitars',
                description: 'Acoustic guitars remain one of the most popular means of making music in the world and for good reason. These iconic instruments produce a rich, engrossing sound that can lead a band, accompany a singing ensemble, or inspire you to write that next hit.',
                image: guitar1,
            },
            {
                id: 2,
                name: 'Electric Guitars',
                description: 'Electric stringed instruments most traditionally played by being worn over the shoulder (or balanced on the knee), fretted with one hand, and plucked or strummed with the other. When the strings are played, magnetic pickups take the sound and send it to an amplifier to make it louder.',
                image: guitar2,
            },
            {
                id: 3,
                name: 'Bass Guitars',
                description: 'Bass has always been one of the most integral parts of any ensemble, and over the past several decades, the guitar form of this low-end instrument has worked its way into most every genre. Here on Reverb, browse one of the widest selections of new, used, and vintage bass guitars anywhere in the world.',
                image: guitar3,
            },
        ]

    return (
        <div className='mx-4 lg:mx-32 mb-20'>
            <div className='text-center mt-24 mb-12'>
                <h4 className='text-xl text-primary font-bold font-oswald uppercase mb-1'>Choose A Category</h4>
                <h2 className='text-xl text-secondary font-oswald mb-8'>Find guitars from the largest collection of Used Guitars N Gears. Choose a category to buy your dream Guitar.</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categoriesData.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;