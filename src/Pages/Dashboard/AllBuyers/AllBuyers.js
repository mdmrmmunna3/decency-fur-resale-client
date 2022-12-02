import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookingOrders?email=${user?.email}`
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

    console.log(bookings)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div>
            <h2 className='text-center navbar-title lg:text-3xl text-2xl my-8'>All Buyers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full table-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            bookings?.map((booking, i) => <tr key={booking?._id}>

                                <>
                                    <th>{i + 1}</th>
                                    <td>{booking?.buyerName}</td>
                                    <td><img className="mask mask-squircle w-12 h-12" src={booking?.productImg} alt="" /></td>
                                    <td>{booking?.productName}</td>
                                    <td>{booking?.price}</td>
                                </>

                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllBuyers;