import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Navbar.css';
import logo from '../../../assets/logo/images.png'
import { FaUserCircle } from 'react-icons/fa';

const Nabvar = () => {
    const { user, logOut, userRoleInfo } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/categories">Categories</Link>
        </li>
        <li><Link to="/blog">Blogs</Link></li>
        {user?.uid ?
            <>
                {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
                {/* dashboard role condition start */}
                {
                    userRoleInfo?.role === "admin" && <li><Link to="/dashboard/allusers">Dashboard</Link></li>
                }
                {
                    userRoleInfo?.role === "Seller" && <li><Link to="/dashboard/seller/myproduct">Dashboard</Link></li>
                }
                {
                    userRoleInfo?.role === "Buyer" && <li><Link to="/dashboard/buyer/myorders">Dashboard</Link></li>
                }

                {/* dashboard role condition end */}

                <li><Link to="/login"><button onClick={handleLogOut}>SignOut</button></Link></li>
                <li><img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="" /></li>
            </>
            :
            <li><Link to="/login">Login</Link></li>}
        <li className='text-white'><FaUserCircle></FaUserCircle></li>
    </React.Fragment>
    return (
        <div className='mb-1 bg-black text-blue-400 p-2'>
            <div className="navbar flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <Link to="/"><img className='h-20 w-28 p-0' src={logo} alt="" /></Link>
                    <Link to="/" className="normal-case lg:text-2xl navbar-title text-xl p-0">Decency Fur ReSale</Link>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 rounded-lg">
                        {menuItems}
                    </ul>
                </div>
                {/* sidevar menu  */}
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>

    );
};

export default Nabvar;