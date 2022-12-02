import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import ShowProductDetails from '../CategoryProducts/ShowProductDetails/ShowProductDetails';

const BookingModal = () => {
    const { id, brand } = useParams();
    const { user } = useContext(AuthContext);
    const [bookdata, setBookdata] = useState({})
    const [location, setLocation] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        fetch(`https://decency-fur-resale-server.vercel.app/products/${id}`)
            .then(res => res.json())
            .then(data => setBookdata(data))
    }, [id])


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;

        // console.log(location, phone)

        const bookedProduct = {
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            buyerImg: user?.photoURL,
            brand: bookdata?.brand,
            productName: bookdata?.productName,
            productImg: bookdata?.image_url,
            price: bookdata?.resale_price,
            location,
            phone
        }

        console.log(bookedProduct);

        fetch('https://decency-fur-resale-server.vercel.app/bookingOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    toast.success('Booked Successfully')
                    form.reset();
                
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <>
            <ShowProductDetails></ShowProductDetails>

            <div className='text-center my-12'><label htmlFor="booking-modal" className="btn btn-primary ">Book Product</label></div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <img src={bookdata?.image_url} alt="" />
                    </div>
                    {
                        bookdata ?

                            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>

                                <input name='displayName' type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full " />
                                <input name='photoURL' type="text" disabled defaultValue={user?.photoURL} placeholder="PhotoURL" className="input input-bordered w-full " />

                                <input name='email' type="text" disabled defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full " />
                                <input name='brandName' type="text" disabled defaultValue={brand} placeholder="brand name" className="input input-bordered w-full " />
                                <input name='productName' type="text" disabled defaultValue={bookdata?.productName} placeholder="product name" className="input input-bordered w-full " />
                                <input name='productImg' type="text" disabled defaultValue={bookdata?.image_url} placeholder="productImg" className="input input-bordered w-full " />

                                <input name='price' type="text" disabled defaultValue={bookdata?.resale_price} placeholder="price" className="input input-bordered w-full " />

                                <input onChange={(e) => setPhone(e.target.value)} name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                                <input onChange={(e) => setLocation(e.target.value)} name='location' type="text" placeholder="location" className="input input-bordered w-full " />
                                <br />
                                <input
                                    className='btn btn-accent text-white' type="submit" value="Submit"
                                />
                            </form>
                            :
                            <Loading></Loading>
                    }
                </div>
            </div>

        </>
    );
};

export default BookingModal;