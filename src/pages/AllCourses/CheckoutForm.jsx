import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CheckoutForm = ({ course }) => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transId, setTransId] = useState('')
    console.log('clientSecret', clientSecret);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const totalPrice = course.price;
    console.log('course', course);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
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
            toast.error(error.message)
            console.log('error', error);
        } else {
            setError('')
            console.log('PaymentMethod', paymentMethod);
        }

        if (!clientSecret) {
            setError('Client secret is not available.');
            toast.error('Client secret is not available.');
            return;
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
                const enrollInfo = {
                    title: course.title,
                    name: course.name,
                    image: course.image,
                    email: user?.email
                }
                axiosSecure.post(`/myEnrollCourse`, enrollInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success('Successfully payment')
                            setTransId(paymentIntent.id)
                            navigate('/dashboard/myEnrollCourse')
                        }
                    })
            }
        }

    }

    return (
        <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                backgroundColor: 'white',
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
        </div>
    );
};

export default CheckoutForm;