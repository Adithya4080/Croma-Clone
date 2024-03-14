import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Cart } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const StripeCheckoutButton = ({price}) => {
    const publishableKey = 'pk_test_51OmSv7SIMoZdtIVGwp3YpB2qa4SB4kKIkTgckHdzjbZMavTqYFGpG0OjUN1Gf53Kxudh8rnwZtze8zLnnYCdKTut00I2qUIzoe'
    const { clearCart } = useContext(Cart);
    const navigate = useNavigate();
    
    const onToken = (token) => {
        console.log(token);
        navigate("/success");
        clearCart();
    }

    const handleFailedPayment = (error) => {
        console.error("Payment failed:", error);
        navigate("/cancel"); 
    }

    return (
        <StripeCheckout
            label='Pay Now ₹'
            name= 'Croma'
            billingAddress
            shippingAddress
            description={`Your total is ${price}`}
            amount={price * 100}
            panelLabel='Pay Now'
            token={onToken}
            onError={handleFailedPayment}
            stripeKey={publishableKey}
        />           
    );
};

export default StripeCheckoutButton 