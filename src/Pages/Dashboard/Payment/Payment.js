import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const order = useLoaderData();
    const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_GATEWAY_PK);

    return (
        <>
            <div>
                <h3 className="font-bold text-4xl">payment</h3>
            </div>
            <div className='my-16 w-[400px]'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </>
    );
};

export default Payment;