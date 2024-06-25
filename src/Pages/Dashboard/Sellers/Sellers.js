import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import Swal from 'sweetalert2';



const Sellers = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/products?email=${user?.email}`
    // console.log(url);
    const { data: showProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['showProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {

            });
            const data = await res.json();
            return data;
        }
    })


    const handleDeleteProduct = async (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`http://localhost:5000/products/${product?._id}`, {
                        method: 'DELETE',
                    });

                    const data = await res.json();
                    if (res.ok) {
                        refetch();
                        Swal.fire({
                            title: "Delete Product!",
                            text: `Product has been delete`,
                            icon: "success"
                        });
                    } else {
                        throw new Error(data.message || "Failed to Delete Product.");
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

    }

    console.log(showProducts)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <h2 className='text-center text-2xl lg:text-4xl navbar-title my-8'>My Products</h2>
            {

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Phone</th>
                                <th>Ps_Date</th>
                                <th>Location</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showProducts.map((showProduct, i) => <tr key={showProduct?._id}>
                                    {
                                        user?.email === showProduct?.sellerEmail &&
                                        <>
                                            {/* <th>{i + 1}</th> */}
                                            <td>{showProduct?.brand}</td>
                                            <td>{showProduct?.productName}</td>
                                            <td><img className="mask mask-squircle w-12 h-12" src={showProduct?.image_url} alt="" /></td>
                                            <td>{showProduct?.phone}</td>
                                            <td>{showProduct?.post_date}</td>
                                            <td>{showProduct?.location}</td>

                                            <td>
                                                <label onClick={() => handleDeleteProduct(showProduct)} className='font-medium bg-red-500 p-1 rounded-sm text-white cursor-pointer'>Delete</label>
                                            </td>
                                        </>
                                    }

                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            }
        </section >
    );

};

export default Sellers;

// user?.email === showProduct?.sellerEmail &&