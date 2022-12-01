import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
// import bgImg from '../../assets/bg-img/signup.jpg'

const SignUp = () => {
    const { googleSignUp, createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('');
    const navigate = useNavigate();

    // handleSignup WITH Google
    const handleSignUpGoogle = () => {
        googleSignUp()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('SignUp Successfully');
            })
            .catch(err => console.error(err));
    }

    const imgHostKey = process.env.REACT_APP_imgbb_key;
    // handleSignUp with email and password
    const handleSignUp = data => {
        const name = data.name
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(ImageData => {

                setSignUpError('');
                createUser(data.email, data.password)
                    .then(result => {
                        const user = result.user;
                        console.log(user);
                        updateUser(name, ImageData.data.url)
                            .then(() => {
                                saveUser(data.name, data.email)
                            })
                            .catch(err => console.error(err))
                        toast.success('User Create Successfully');
                        navigate('/')
                    })
                    .catch(err => {
                        console.error(err.message);
                        setSignUpError(err.message);
                    });
            })

    }

    // create saved user info
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/allusers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // getUserToken(email);
                setCreateUserEmail(email)
            })
            .catch(err => console.error(err));
    }



    return (
        <section
            // style={{
            //     backgroundImage: `url(${bgImg})`,
            //     backgroundSize: 'cover',
            //     backgroundRepeat: 'no-repeat',
            // }}
            style={{
                backgroundColor: 'rgb(31 41 55)'
            }}
            className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-white rounded-lg'>
                <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text'
                            {...register("name", {
                                required: 'name is required'
                            })
                            }
                            placeholder="name" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email'
                            {...register('email', {
                                required: 'email is required'
                            })
                            }
                            placeholder="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register('password', {
                                required: 'password is required',
                                minLength: { value: 6, message: 'password must be 6 characters long' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=)/, message: 'Password must have upparcase,number and special characters' }
                            })
                            }
                            placeholder="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo</span>
                        </label>
                        <input type="file"
                            {...register("image", {
                                required: 'Photo is required'
                            })
                            }
                            placeholder="Name" className="input input-bordered text-accent" required />
                        {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                    </div>

                    {/* check option  */}

                    <select className="select select-bordered w-full  " required>
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select>

                    <input className='btn btn-accent w-full my-3' value='SignUp' type="submit" />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already have an account?<Link className='text-secondary' to='/login'>Please Login</Link> </p>
                <div>
                    <div className="divider">OR</div>
                    <button onClick={handleSignUpGoogle} className='btn btn-outline w-full'><FcGoogle className='text-2xl mr-2'></FcGoogle> CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </section>
    );
};

export default SignUp;