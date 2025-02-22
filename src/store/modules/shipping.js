export const ADD_SHIPPING = "shipping/add";

const initialState = { shippings: [] };

export default function shippingReducer(
  state = initialState,
  dispatchedAction
) {
  const shipping = dispatchedAction.payload;
  switch (dispatchedAction.type) {
    case ADD_SHIPPING:
      return { ...state, shippings: [...state.shippings, shipping] };
    default:
      return state;
  }
}

export const addShipping = (payload) => {
  return { type: ADD_SHIPPING, payload: payload };
};

export const getShippings = (state) => state.shipping.shippings;
