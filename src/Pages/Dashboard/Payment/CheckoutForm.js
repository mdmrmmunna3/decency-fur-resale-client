import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import "./CheckoutForm.css"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ order }) => {
    const { price, buyerEmail, buyerName, buyerImg, _id, productName, brand } = order;

    const stripe = useStripe();
    const elements = useElements();
    const [paymentCardError, setPaymentCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const orderprice = parseFloat(price);
    const navigate = useNavigate();



    useEffect(() => {
        fetch("https://decency-fur-resale-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ orderprice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [orderprice]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('error', error);
            setPaymentCardError(error.message);
        }
        else {
            setPaymentCardError('');
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: buyerEmail || 'anonymous',
                        name: buyerName || 'unknown',
                    },
                },
            },
        );

        if (confirmError) {
            setPaymentCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            const payment = {
                img: buyerImg,
                email: buyerEmail,
                transactionId: paymentIntent.id,
                price: orderprice,
                name: buyerName,
                productName,
                brand,
                orderId: _id,

            }

            fetch("https://decency-fur-resale-server.vercel.app/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data?.insertedResult?.insertedId || data?.updatedResult?.modifiedCount > 0) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${buyerName} Your payment was successfully done`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        navigate('/dashboard/buyer/myorders');
                    }
                })
        }
        setProcessing(false);

    }

    return (
        <>
            <form onSubmit={handleSubmit}
                style={{
                    boxShadow: `rgba(50, 50, 93, 0.109804) 0px 4px 6px,
        rgba(0, 0, 0, 0.0784314) 0px 1px 3px`
                }}
                className='p-2'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className="my-4 text-white rounded-sm btn btn-sm btn-primary"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            {
                paymentCardError && <p className="text-red-600">{paymentCardError}</p>
            }
        </>
    );
};

export default CheckoutForm;