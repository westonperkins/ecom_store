import { loadStripe } from '@stripe/stripe-js'
const PUBLIC_KEY = 'pk_test_51JZ3sRJHiW4Fsfl8HxobKUh9Av5bC8p598x7s8NmltX5SGJhgim8UlZd0OdeuZdtLW1zZCfhurHbhPrunR5YVAKi0028L9gFSK'
const stripePromise = loadStripe(PUBLIC_KEY)
export async function initiateCheckOut({lineItems = {}}){
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin
    })
}


// import React, {useState} from 'react'
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
// import { makePayment } from '../../actions/checkout'

// import axios from 'axios'

// const CARD_OPTIONS = {
//     iconStyle: 'solid',
//     style: {
//         base: {
//             iconColor: "#c4f0ff",
//             color: "fff",
//             fontWeight: 500,
//             fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//             fontSize: "16px",
//             fontSmoothing: 'antialiased',
//             ":-webkit-autofill":{color:"#fce883"},
//             "::placeholder":{color:"#87bbfd"}
//         },
//         invalid: {
//             iconColor: "#ffc7ee",
//             color: "#ffc7ee"
//         }
//     }
// }

// export const CheckoutForm = () => {
//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })
//         // makePayment('test')
//         console.log()

//         // if(!error) {
//         //     try{
//         //         const {id} = paymentMethod
//         //         const response = await axios.post('http://localhost:8000/api/checkout/', {
//         //             amount: 1000,
//         //             id
//         //         })
//         //         makePayment()
//         //         if(response.data.success) {
//         //             console.log('successful payment')
//         //             setSuccess(true)
//         //         }
//         //     } catch (error) {
//         //         console.log('error', error)
//         //     }
//         // }
//         // else {
//         //     console.log(error.message)
//         // }
//     }

//     return (
//         <>
//             {!success ? 
//             <form onSubmit={handleSubmit}>
//                 <fieldset className="formGroup"> 
//                     <div className='formRow'>
//                         <CardElement options={CARD_OPTIONS}/>
//                     </div>
//                 </fieldset>
//                 <button>
//                     Purchase
//                 </button>
//             </form>
//             :
//             <div>
//                 <h4>Congratulations on your purchase</h4>
//             </div>
//             }
//         </>
//     )
// }

// export default CheckoutForm