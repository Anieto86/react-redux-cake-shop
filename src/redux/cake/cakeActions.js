//imports the constants
 import { BUY_CAKE } from "./cakeConstant";


//Actions functions
export const buyCake = function(number) {
  return {
    type: BUY_CAKE,
    payload: number
  };
};


