import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nabvar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
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

                        <li><Link to='/dashboard/allsellers'>AllSellers</Link></li>
                        <li><Link to='/dashboard/allbuyers'>AllBuyers</Link></li>
                        {/* {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add A Doctor</Link></li>
                                <li><Link to='/dashboard/ManageDoctors'>Manage Doctors</Link></li>
                            </>
                        } */}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default DashboardLayout;