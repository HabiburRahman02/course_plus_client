import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Heading from "../../components/Heading";
import CheckoutForm from "./CheckoutForm";

// TODO: added pk
const stripePromise = loadStripe(import.meta.env.STRIPE_PUBLISHED_KEY)

const Payment = () => {
    const course = useLoaderData();
    const totalPrice = course.price
    console.log('payment data', totalPrice);
    return (
        <div>
            <Heading title='Please Payment'></Heading>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;