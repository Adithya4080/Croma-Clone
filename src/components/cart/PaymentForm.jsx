import React, {useEffect} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm= ({total}) => {
    useEffect(() => {
        document.body.classList.add('white-bg');
        return () => {
          document.body.classList.remove('white-bg');
        };
      }, []);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        
        if (error) {
            console.error(error);
        } else {
            console.log(paymentMethod);
        }
    };
    return (
        <form onSubmit={handleSubmit} className='text-black'>
            <label>
                Card Details
                <CardElement />
            </label>
            <button type='submit' disabled={!stripe}>
                Pay ₹{total.toFixed(2)}
            </button>
        </form>
    );
};

export default PaymentForm