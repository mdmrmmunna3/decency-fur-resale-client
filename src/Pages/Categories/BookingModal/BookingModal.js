import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = () => {

    const { user } = useContext(AuthContext);
    // useEffect(() => {
    //     fetch()
    // },[])

    return (
        <>
            <label htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-accent">{ }</h3>
                    <form className='grid grid-cols-1 gap-4 mt-10'>

                        <input name='displayName' type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full " />

                        <input name='email' type="text" disabled defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full " />

                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <br />
                        <input
                            className='btn btn-accent text-white' type="submit" value="Submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;