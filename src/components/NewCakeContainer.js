import React, { useState } from "react";
import { connect } from "react-redux";

//impor the action
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of NewCakes - {props.numberOfCakes} (with connect())</h2>
      <input type='text' value= {number} onChange={(e) => setNumber(e.target.value)}></input>
          <button onClick={() => props.buyCake(number)}>Buy {number} Cake </button>
    </div>
  );
}

//!1 definir una nueva function//!This function gets the redux state as parameter and returns an object
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes, //todo se pone cake aqui por que se hizo la combinacion de reducers y el nombre de la propiedad es cake
  };
};

//!2  mapDispatch This function gets the redux dispach as parameter and returns an object
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)), //! Cramos una propiadad (buyCake) y su valor es una funcion que dispacht( Aca pasamemos la acction  )
  };
};
//!3 conectar estas dos funciones
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
