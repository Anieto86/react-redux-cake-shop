import "./App.css";

import { Provider } from "react-redux"; //! esAca entra va el PRovider para conectar el store de REDUX
import store from "./redux/store" //!se pasa el store recien importando como prop 

//Component
import CakeContaineer from "./components/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContaineer />
      </div>
    </Provider>
  );
}

export default App;
