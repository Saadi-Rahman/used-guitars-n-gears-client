import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({selectedProduct, setSelectedProduct}) => {
    const {title, resale_price} = selectedProduct; // selectedProduct is another name of productDetails
    const {user} = useContext(AuthContext);

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
            price: resale_price,
            buyer: name,
            email,
            phone,
            location,
            message,
        }

        // TODO: send data to the server. Once data is saved then close the modal and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSelectedProduct(null);
            toast.success('Booking Confirmed!');
        })

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
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered input-primary w-full mb-3" required />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered w-full mb-3" required />
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