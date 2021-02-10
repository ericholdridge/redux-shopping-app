export const updateShippingSubdivision = (subdivision) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_SHIPPING_SUBDIVISION",
      payload: subdivision,
    });
  };
};
