export const updateShippingOption = (shippingOption) => {
  return (dispatch) => {
    console.log(shippingOption);
    dispatch({
      type: "UPDATE_SHIPPING_OPTION",
      payload: shippingOption,
    });
  };
};
