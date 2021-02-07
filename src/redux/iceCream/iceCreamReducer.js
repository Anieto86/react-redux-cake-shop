import { BUY_ICE_CREAM } from "./iceCreamConstan";

const intialState = {
  numberOfIceCreams: 20,
};

const IceCreamReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
          return {
          ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
};

export default IceCreamReducer;
