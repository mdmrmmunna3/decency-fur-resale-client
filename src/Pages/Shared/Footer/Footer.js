import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='my-6 py-20 px-4 text-white bg-black '

        >
            <footer className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-xl">Categories</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                            <Link to="/">BedRoom</Link>
                            <Link to="/">Kitchen</Link>
                            <Link to="/">DrawingRoom</Link>
                            <Link to="/">Using with Preprocessors</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-xl">About</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                            <Link to="/">Utility-First</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">Category</Link>
                            <Link to="/">Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-xl">Developers</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                            <Link to="/">Public API</Link>
                            <Link to="/">Documentation</Link>
                            <Link to="/">Guides</Link>
                            <Link to="/">Customizing Colors</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-xl">Community</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                            <Link to="/">GitHub</Link>
                            <Link to="/">Discord</Link>
                            <Link to="/">Twitter</Link>
                            <Link to="/">YouTube</Link>
                        </div>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between mt-4">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2022 All rights reserved</span>
                        <Link to="/">
                            <span>Privacy policy</span>
                        </Link>
                        <Link to="/">
                            <span>Terms of service</span>
                        </Link>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <Link className=' text-2xl dark:bg-violet-400 dark:text-gray-900' to="/"><FaFacebook></FaFacebook></Link>
                        <Link className=' text-2xl dark:bg-violet-400 dark:text-gray-900' to="/"><FaGithub></FaGithub></Link>
                        <Link className=' text-2xl dark:bg-violet-400 dark:text-gray-900' to="/"><FaTwitter></FaTwitter></Link>
                        <Link className=' text-2xl dark:bg-violet-400 dark:text-gray-900' to="/"><FaYoutube></FaYoutube></Link>
                        <Link className=' text-2xl dark:bg-violet-400 dark:text-gray-900' to="/"><FaInstagram></FaInstagram></Link>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;