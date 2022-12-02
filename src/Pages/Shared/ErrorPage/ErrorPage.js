import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-red-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Something went wrong, Sorry, we couldn't find this page.</p>
                    <Link to="/" className='my-4 text-blue-400 btn'>Back to Home Page</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;