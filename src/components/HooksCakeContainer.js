import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes); //todo se pone cake aqui por que se hizo la combinacion de reducers y el nombre de la propiedad es cake
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes with hooks - {numberOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake with hooks</button>
    </div>
  );
}

export default HooksCakeContainer;
