import React from 'react';

const BookingModal = () => {
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-stone-100">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-lg text-primary font-semibold font-oswald mb-1">Lindo PBEQ Piebald Burl Ash Electro-Acoustic Guitar</h2>
                    <h4 className="text-sm text-secondary font-semibold font-oswald mb-3">Price: $180</h4>
                    <form className='flex flex-col'>
                        <input name='name' type="text" defaultValue="{user?.displayName}" disabled className="input input-bordered input-primary w-full mb-3" required />
                        <input name='email' type="email" defaultValue="{user?.email}" disabled className="input input-bordered w-full mb-3" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-3" required />
                        <input name='location' type="text" placeholder="Meeting location" className="input input-bordered w-full mb-3" required />
                        <textarea className="textarea textarea-bordered w-full mb-3" placeholder="Message"></textarea>
                        <button className="btn btn-primary text-white">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;