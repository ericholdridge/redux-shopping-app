export const updateShippingCode = (shippingCode) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_SHIPPING_COUNTRY",
      payload: shippingCode,
    });
  };
};
