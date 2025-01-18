import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


// TODO: added pk
const stripePromise = loadStripe(import.meta.env.VITE_stripe_published_key)
const Payment = () => {
    const course = useLoaderData();
    const totalPrice = course.price
    // console.log('payment data', totalPrice);

    return (
        <div>
            <div className="pt-8"><Heading title='Please Payment'></Heading></div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm totalPrice={totalPrice}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;