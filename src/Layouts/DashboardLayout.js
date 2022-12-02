import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Nabvar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { userRoleInfo } = useContext(AuthContext);
    return (
        <section>

            <Nabvar></Nabvar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {userRoleInfo?.role === "admin" &&
                            <>
                                <li><Link to='/dashboard/allusers'>AllUsers</Link></li>
                                <li><Link to='/dashboard/allsellers'>AllSellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>AllBuyers</Link></li>
                            </>
                        }

                        {   userRoleInfo?.role === "Seller" &&
                            <>
                                <li><Link to='/dashboard/seller/myproduct'>My Product</Link></li>
                                <li><Link to='/dashboard/seller/addproduct'>Add product</Link></li>
                                
                            </>
                        }

                        {   userRoleInfo?.role === "Buyer" &&
                            <>
                                <li><Link to='/dashboard/buyer/myorders'>My Orders</Link></li>
                            </>
                        }
                        
                       
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default DashboardLayout;