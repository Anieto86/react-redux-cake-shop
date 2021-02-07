//Aqui vamos a combinar los reducer y pasar solo un reducer al Store.

import { combineReducers } from "redux";

//Importar los reductores del
import cakeReducer from "./cake/cakeReducer";
import iceCreamReduced from "./iceCream/iceCreamReducer";
import chocolateReducer from "./chocolate/chocolateReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReduced,
  chocolates: chocolateReducer,
});

export default rootReducer;
