export const updateShippingOption = (shippingOption) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_SHIPPING_OPTION",
      payload: shippingOption,
    });
  };
};
