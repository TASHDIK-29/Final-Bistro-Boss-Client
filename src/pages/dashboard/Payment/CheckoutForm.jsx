import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');

    // stripe builtin hooks
    const stripe = useStripe();
    const elements = useElements();


    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        if (totalPrice) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }


        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }


        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[Payment error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }


        // Confirm Payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Anonymous',
                    name: user?.displayName || 'Anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error');
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);


                // save payment history at db
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending',
                    transactionId: paymentIntent.id
                }

                const res = await axiosSecure.post('/payments', payment);

                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Payment Successful!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/userPayment');
                }

                refetch();
            }
        }

    }



    return (
        <form onSubmit={handleSubmit}>
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
            <button className="px-2 py-1 font-semibold bg-orange-500 rounded-md my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-sm text-red-600 font-semibold">{error}</p>
            {transactionId && <p className="text-sm text-green-600 font-semibold">Your Transaction Id : {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;