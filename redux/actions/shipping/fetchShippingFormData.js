export const fetchShippingFormData = (data) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_SHIPPING_FORM_DATA",
      payload: data,
    });
  };
};
