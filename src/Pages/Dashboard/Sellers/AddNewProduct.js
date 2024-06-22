import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddNewProduct = () => {

    const { user } = useContext(AuthContext);

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.displayName.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const brand = form.brand.value;
        const location = form.location.value;
        const productName = form.productName.value;
        const image_url = form.image_url.value;
        const orginal_price = form.orginal_price.value;
        const resale_price = form.resale_price.value;
        const year_of_purchase = form.year_of_purchase.value;
        const year_of_use = form.year_of_use.value;
        const phone = form.phone.value;
        const post_date = form.post_date.value;
        const description = form.description.value;
        const condition = form.condition.value;

        const addProduct = {
            sellerName: displayName,
            sellerEmail: email,
            sellerImg: photoURL,
            description,
            image_url,
            brand,
            location,
            productName,
            orginal_price,
            resale_price,
            year_of_purchase,
            year_of_use,
            phone,
            post_date,
            condition,
        }

        fetch('https://decency-fur-resale-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Add new Product successfully');
                    form.reset();
                    document.getElementById('add-product').checked = false; // Close the modal
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className='text-center my-8'>
                <h3 className='text-3xl mb-3 navbar-title'>Add Products</h3>
                <label htmlFor="add-product" className="btn btn-primary"> Add Product</label>
                <input type="checkbox" id="add-product" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="add-product" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold text-accent">Add New Product</h3>
                        <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-4 mt-10'>

                            <input name='displayName' type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full " required />

                            <input name='email' type="email" disabled defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full " required />

                            <input name='photoURL' type="text" disabled defaultValue={user?.photoURL} placeholder="photoURL" className="input input-bordered w-full " required />

                            <select name='brand' className="select select-bordered w-full  " required>
                                <option>Toyota</option>
                                <option>BMW</option>
                                <option>Tesla</option>
                                <option>Rolls-Royce</option>
                            </select>

                            <input name='location' type="text" placeholder="location" className="input input-bordered w-full " required />

                            <input name='image_url' type="phimage_url" placeholder="Product-img" className="input input-bordered w-full " required />

                            <input name='productName' type="text" placeholder="Product-name" className="input input-bordered w-full " required />

                            <input name='orginal_price' type="text" placeholder="orginal-price" className="input input-bordered w-full " required />

                            <input name='resale_price' type="text" placeholder="resale-price" className="input input-bordered w-full " required />

                            <input name='year_of_purchase' type="text" placeholder="year_of_purchase" className="input input-bordered w-full " required />

                            <input name='year_of_use' type="text" placeholder="year_of_use" className="input input-bordered w-full " required />

                            <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " required />

                            <select name='condition' className="select select-bordered w-full  " required>
                                <option>excellent</option>
                                <option>good</option>
                                <option>fair</option>
                            </select>

                            <input type="date" name="post_date" required />

                            <textarea name='description' className="textarea textarea-error m-1 " placeholder="description" required></textarea>
                            <br />
                            <input
                                className='btn btn-accent text-white' type="submit" value="Submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;
