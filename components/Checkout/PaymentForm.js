import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { handleCaptureCheckout } from "../../redux/actions/checkout/generateCheckoutToken/handleCaptureCheckout";
import Link from "next/link";

const PaymentForm = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [showPayButton, setShowPayButton] = useState(false);
  const router = useRouter();
  const [stripePromise, setStripePromise] = useState(() =>
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
  );
  const cart = useSelector((state) => state.cart);
  const shipping = useSelector((state) => state.shipping.shippingFormData);
  const dispatch = useDispatch();

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    // Stripe.js has not loaded yet. Make sure to disable
    // form submission until Stripe.js has loaded.

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error.message);
    } else {
      const orderData = {
        line_items: cart.token.live.line_items,
        customer: {
          firstname: shipping.firstName,
          lastname: shipping.lastName,
          email: shipping.email,
        },
        shipping: {
          name: "Primary",
          street: shipping.address,
          town_city: shipping.city,
          county_state: shipping.subdivision,
          postal_zip_code: shipping.zip,
          country: shipping.country,
        },
        fulfillment: { shipping_method: shipping.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: { payment_method_id: paymentMethod.id },
        },
      };
      dispatch(handleCaptureCheckout(cart.token.id, orderData));
    }
    router.push("/confirmation");
  };

  const handleOnChange = (e) => {
    if (e.empty) {
      setErrorMessage("");
    } else if (e.complete) {
      setShowPayButton(true);
      setErrorMessage("");
      // router.push("/confirmation");
    } else if (e.error) {
      // Show error message to the user
      setShowPayButton(false);
      setErrorMessage(e.error.message);
    } 
    else if (e.complete === false) {
      setShowPayButton(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-0 py-20">
        <div className="max-w-xl mx-auto shadow-2xl p-4 rounded-md bg-white">
          <h1 className="font-bold mb-4 text-2xl">Order Summary</h1>
          {cart.cart?.line_items?.map((item, index) => (
            <div key={index} className="py-4">
              <h2 className="font-medium text-xl">{item.product_name}</h2>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Quantity: {item.quantity}</span>
                <span>{item.price.formatted_with_symbol}</span>
              </div>
            </div>
          ))}
          <div className="pt-4 border-b-2 border-gray-100 pb-4">
            <h2 className="text-xl">Total</h2>
            <span className="font-bold text-xl">
              {cart.cart?.subtotal?.formatted_with_symbol}
            </span>
          </div>
          <Elements stripe={stripePromise}>
            <ElementsConsumer>
              {({ elements, stripe }) => (
                <form
                  onSubmit={(e) => handleSubmit(e, elements, stripe)}
                  className="mt-2"
                >
                  <CardElement onChange={(e) => handleOnChange(e)} />
                  {errorMessage && (
                    <div className="mt-2">
                      <p className="text-red-500 font-medium">{errorMessage}</p>
                    </div>
                  )}
                  <div className="flex justify-between pt-4">
                    <Link href="/checkout">
                      <a className="bg-black px-4 py-1 text-white rounded shadow">
                        Back
                      </a>
                    </Link>
                    {showPayButton ? (
                      <button
                        disabled={!stripe}
                        className="bg-green-400 px-4 py-1 rounded shadow"
                        type="submit"
                      >
                        Pay {cart.token?.live?.subtotal.formatted_with_symbol}
                      </button>
                    ) : null}
                  </div>
                </form>
              )}
            </ElementsConsumer>
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;
