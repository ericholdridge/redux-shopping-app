import { useSelector } from "react-redux";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentForm = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="max-w-xl mx-auto shadow-2xl p-4 rounded-md bg-white">
        <h1 className="font-bold mb-4 text-2xl">Order Summary</h1>
        {cart.line_items.map((item) => (
          <div className="py-4">
            <h2 className="font-medium text-xl">{item.product_name}</h2>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Quantity: {item.quantity}</span>
              <span>{item.price.formatted_with_symbol}</span>
            </div>
          </div>
        ))}
        <div className="pt-4">
          <h2 className="text-xl">Total</h2>
          <span className="font-bold text-xl">{cart.subtotal.formatted_with_symbol}</span>
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;
