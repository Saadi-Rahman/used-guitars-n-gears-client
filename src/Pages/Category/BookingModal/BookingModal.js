import React from 'react';

const BookingModal = ({selectedProduct, setSelectedProduct}) => {
    const {title, resale_price} = selectedProduct; // selectedProduct is another name of productDetails

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const message = form.message.value;

        const booking = {
            selectedProduct: title,
            buyer: name,
            email,
            phone,
            location,
            message,
        }

        // TODO: send data to the server. Once data is saved then close the modal and display success toast
        console.log(booking);
        setSelectedProduct(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-stone-100">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-lg text-primary font-semibold font-oswald mb-1">{title}</h2>
                    <h4 className="text-sm text-secondary font-semibold font-oswald mb-3">Price: ${resale_price}</h4>

                    <form onSubmit={handleBooking} className='flex flex-col'>
                        <input name='name' type="text" defaultValue="{user?.displayName}" disabled className="input input-bordered input-primary w-full mb-3" required />
                        <input name='email' type="email" defaultValue="{user?.email}" disabled className="input input-bordered w-full mb-3" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-3" required />
                        <input name='location' type="text" placeholder="Meeting location" className="input input-bordered w-full mb-3" required />
                        <textarea name='message' className="textarea textarea-bordered w-full mb-3" placeholder="Type your Message" required></textarea>
                        <button className="btn btn-primary text-white">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;