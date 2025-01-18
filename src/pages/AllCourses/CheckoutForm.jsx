import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const CheckoutForm = ({ totalPrice }) => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transId, setTransId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
            console.log('error', error);
        } else {
            setError('')
            console.log('PaymentMethod', paymentMethod);
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('Confirm Error', confirmError);
            setTransId('')
        }
        else {
            console.log('Confirm Payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                toast.success('Successfully payment')
                setTransId(paymentIntent.id)
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

            <button
                disabled={!stripe || !clientSecret}
                className="btn btn-secondary btn-sm my-4" type="submit" >
                Pay Now
            </button>
            {error && <p> Error: <span className="text-red-600">{error}</span></p>}
            {transId && <p> TransId: <span className="text-green-600">{transId}</span></p>}
        </form>
    );
};

export default CheckoutForm;