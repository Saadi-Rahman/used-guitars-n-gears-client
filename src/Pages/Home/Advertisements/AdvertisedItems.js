import React from 'react'
import AdvertisedItem from './AdvertisedItem';

const AdvertisedItems = () => {

    const advertisedItemsData = [
        {
            id: 1,
            name: 'Martin Dreadnought Jr Electro Acoustic, Spruce',
            price: "349.50",
            image: "https://i.postimg.cc/hjC0PpNb/acoustic3.jpg",
        },
        {
            id: 2,
            name: 'Fender Made in Japan Telecaster 1989-1990 Blonde',
            price: "587.44",
            image: "https://i.postimg.cc/bNSRp0gk/electric1.jpg",
        },
        {
            id: 3,
            name: 'Cort Artisan Series A5PLUSFMMHOPN 5-String Bass',
            price: "1,189.90",
            image: "https://i.postimg.cc/yxtX0W1D/bass5.jpg",
        },
        {
            id: 4,
            name: 'Bacchus Global Series WL5 ASH STB Jazz Bass',
            price: "849.50",
            image: "https://i.postimg.cc/ZnCx96Sk/bass4.jpg",
        },
        {
            id: 5,
            name: 'Gibson Custom Shop Les Paul Standard 2007',
            price: "9,863.32",
            image: "https://i.postimg.cc/zGmFBL2M/electric2.jpg",
        },
        {
            id: 6,
            name: '2021 Fender Player Series Precision Bass Buttercream',
            price: "699.77",
            image: "https://i.postimg.cc/HL92Fp2N/bass1.jpg",
        },
        {
            id: 7,
            name: 'EPIPHONE SG BASS (EB-3; 2-PICKUP) - CHERRY',
            price: "349.50",
            image: "https://i.postimg.cc/1RjKk7Gy/bass2.jpg",
        },
        {
            id: 8,
            name: 'Second Hand Ibanez SRX705 5 String Bass Guitar',
            price: "895.95",
            image: "https://i.postimg.cc/76PVkptZ/bass3.jpg",
        },
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