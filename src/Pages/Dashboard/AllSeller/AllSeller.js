import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Swal from 'sweetalert2';

const AllSeller = () => {
    const { user } = useContext(AuthContext);

    const url = `https://decency-fur-resale-server.vercel.app/allusers?email=${user?.email}`;

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    const handleMakeVerify = async (seller) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, verify it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`https://decency-fur-resale-server.vercel.app/allusers/${seller?._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ verified: true })
                    });

                    const data = await res.json();
                    if (res.ok) {
                        refetch();
                        Swal.fire({
                            title: "Verified!",
                            text: "Seller has been verified.",
                            icon: "success"
                        });
                    } else {
                        throw new Error(data.message || "Failed to verify seller.");
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: error.message,
                        icon: "error"
                    });
                }
            }
        });
    };

    const sellers = users.filter(user => user.role === 'Seller');

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section>
            <h2 className='text-center text-2xl lg:text-3xl navbar-title my-8'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-auto">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verified</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((seller, i) => (
                            <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                                <td>
                                    {seller.verified ? (
                                        <span className='text-green-500'>Verified</span>
                                    ) : (
                                        <label onClick={() => handleMakeVerify(seller)} className='font-medium bg-cyan-500 p-1 rounded-sm text-white cursor-pointer'>Make verify</label>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllSeller;
