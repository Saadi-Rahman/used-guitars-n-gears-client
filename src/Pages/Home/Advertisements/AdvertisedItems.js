import React from 'react'
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {

    const advertisedItemsData = [
        {
            id: 1,
            name: 'Lindo PBEQ Piebald Burl Ash Electro-Acoustic Guitar',
            description: 'Acoustic guitars remain one of the most popular means of making music in the world and for good reason. These iconic instruments produce a rich, engrossing sound that can lead a band, accompany a singing ensemble, or inspire you to write that next hit.',
            price: 180,
            image: "https://i.postimg.cc/hjC0PpNb/acoustic3.jpg",
        },
        {
            id: 2,
            name: 'Electric Guitars',
            description: 'Electric stringed instruments most traditionally played by being worn over the shoulder (or balanced on the knee), fretted with one hand, and plucked or strummed with the other. When the strings are played, magnetic pickups take the sound and send it to an amplifier to make it louder.',
            price: 180,
            image: "https://i.postimg.cc/HL92Fp2N/bass1.jpg",
        },
        {
            id: 3,
            name: 'Bass Guitars',
            description: 'Bass has always been one of the most integral parts of any ensemble, and over the past several decades, the guitar form of this low-end instrument has worked its way into most every genre. Here on Reverb, browse one of the widest selections of new, used, and vintage bass guitars anywhere in the world.',
            price: 180,
            image: "https://i.postimg.cc/bNSRp0gk/electric1.jpg",
        },
        {
            id: 4,
            name: 'Bass Guitars',
            description: 'Bass has always been one of the most integral parts of any ensemble, and over the past several decades, the guitar form of this low-end instrument has worked its way into most every genre. Here on Reverb, browse one of the widest selections of new, used, and vintage bass guitars anywhere in the world.',
            price: 180,
            image: "https://i.postimg.cc/76PVkptZ/bass3.jpg",
        }
    ]

    return (
        <div className='mx-4 lg:mx-32 mb-20'>
            <div className='text-center mt-24 mb-12'>
                <h4 className='text-xl text-primary font-bold font-oswald uppercase mb-1'>New Arrivals</h4>
                <h2 className='text-xl text-secondary font-oswald mb-8'>New guitars and gears are added every minute. What do you want to find out?</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    advertisedItemsData.map(advertisedItem => <AdvertisedItem
                        key={advertisedItem.id}
                        advertisedItem={advertisedItem}
                    ></AdvertisedItem>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;