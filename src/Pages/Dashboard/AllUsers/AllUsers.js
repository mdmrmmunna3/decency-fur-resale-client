import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const { data: allusers = [], refetch, isLoading } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allusers', {})
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/allusers/admin/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfull');
                    refetch();
                }
            })
    }


    // cnacel ...
    const closeModal = () => {
        setDeletingUser(null);
    }

    // handleDelete
    const handleUserDelete = user => {
        console.log(user)
        fetch(`http://localhost:5000/allusers/${user._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${user?.role} : ${user?.name} Deleted Successfully`)
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='pt-20'>
            <h2 className='text-center text-2xl lg:text-3xl navbar-title my-8'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td>{user?.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button> : <button className='btn btn-xs btn-primary'>Admin</button>}</td>
                                <td>{
                                    user?.role === "admin" ? <button onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className='btn btn-sm btn-error' disabled>Delete</button> : <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className='btn btn-sm btn-error'>Delete</label>
                                }</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingUser && <ConfirmationModal
                    title={`Are you sure you want to Delete?`}
                    message={`If you delete ${deletingUser?.name}. It cannot be undone `}
                    successAction={handleUserDelete}
                    modalData={deletingUser}
                    closeModal={closeModal}
                    successButtonName={'delete'}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;