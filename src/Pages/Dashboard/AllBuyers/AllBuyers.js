import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const { user } = useContext(AuthContext);

    const url = `https://decency-fur-resale-server.vercel.app/allusers?email=${user?.email}`
    // console.log(url);
    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    const buyers = users.filter(user => user.role === 'Buyer');
    console.log(buyers)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div className='pt-20'>
            <h2 className='text-center navbar-title lg:text-3xl text-2xl my-8'>All Buyers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full table-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            buyers?.map((buyer, i) => <tr key={buyer?._id}>

                                <>
                                    <th>{i + 1}</th>
                                    <td>{buyer?.name}</td>
                                    <td>{buyer?.email}</td>
                                    <td>{buyer?.role}</td>
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