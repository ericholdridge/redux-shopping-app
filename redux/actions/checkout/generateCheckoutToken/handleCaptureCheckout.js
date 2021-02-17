import { commerce } from "../../../../lib/commerce";

export const handleCaptureCheckout = (checkout_token_id, newOrder) => {
  console.log("Checkout token id: ", checkout_token_id);
  return async (dispatch) => {
    const capture = commerce.checkout.capture(checkout_token_id, newOrder);
    console.log("Commerce capture: ", capture);
    dispatch({
      type: "HANDLE_CAPTURE_CHECKOUT",
      payload: capture,
    });
  };
};
