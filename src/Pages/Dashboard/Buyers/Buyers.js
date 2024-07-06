import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Buyers = () => {
    const { user } = useContext(AuthContext);

    const url = `https://decency-fur-resale-server.vercel.app/bookingOrders?email=${user?.email}`
    // console.log(url);
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            });
            const data = await res.json();
            return data;
        }
    })

    // console.log(bookings)
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='pt-20'>
            <h2 className='text-center navbar-title lg:text-3xl text-2xl my-8'>My Orders</h2>

            <div className="overflow-x-auto">
                <table className="table w-full table-auto">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                {
                                    user?.email === booking?.buyerEmail &&
                                    <>
                                        <td>{booking?.buyerName}</td>
                                        <td><img className="mask mask-squircle w-12 h-12" src={booking?.productImg} alt="" /></td>
                                        <td>{booking?.productName}</td>
                                        <td>{booking?.price}</td>
                                        <td>
                                            {
                                                booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                                    <button className='btn btn-primary btn-sm'>Pay</button>
                                                </Link>
                                            }
                                            {
                                                booking.price && booking.paid && <span className='text-green-400'>Paid</span>
                                            }
                                        </td>
                                    </>
                                }

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;