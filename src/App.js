import "./App.css";

import { Provider } from "react-redux"; //! esAca entra va el PRovider para conectar el store de REDUX
import store from "./redux/store"; //!se pasa el store recien importando como prop

//Component
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import HookChocolateContainer from "./components/HookChocolateContainer";
import NewCakeContainer from "./components/NewCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HooksCakeContainer />
        <HookIceCreamContainer />
        <HookChocolateContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
