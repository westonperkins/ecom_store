import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import React from 'react'
import { CheckoutForm } from './CheckoutForm'

const PUBLIC_KEY = 'pk_test_51JZ3sRJHiW4Fsfl8HxobKUh9Av5bC8p598x7s8NmltX5SGJhgim8UlZd0OdeuZdtLW1zZCfhurHbhPrunR5YVAKi0028L9gFSK'
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export const StripeContainer = () => {
    return (
        <div>
            <Elements stripe = {stripeTestPromise}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default StripeContainer