//import constants
import { BUY_CAKE } from "./cakeConstant";

//intial state
const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.initialState - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
