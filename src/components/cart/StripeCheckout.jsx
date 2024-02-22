import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Cart } from '../context/Context';

const StripeCheckoutButton = ({price}) => {
    const publishableKey = 'pk_test_51OmSv7SIMoZdtIVGwp3YpB2qa4SB4kKIkTgckHdzjbZMavTqYFGpG0OjUN1Gf53Kxudh8rnwZtze8zLnnYCdKTut00I2qUIzoe'
    const { clearCart } = useContext(Cart)
    const onToken = (token) => {
        console.log(token);
        clearCart();
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name= 'Croma'
            billingAddress
            shippingAddress
            description={`Your total is ${price}`}
            amount={price * 100}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton 