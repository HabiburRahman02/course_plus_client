import { useLoaderData } from "react-router-dom";

const Payment = () => {
    const course = useLoaderData();
    const totalPrice = course.price
    console.log('payment data', totalPrice);
    return (
        <div>
            payment: ${totalPrice}
        </div>
    );
};

export default Payment;