import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { buyChocolate } from "../redux";

function HookChocolateContainer() {
  const  numberOfChocolates = useSelector(
    (state) => state.chocolates.numberOfChocolates
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Chocolate with Redux React hooks - { numberOfChocolates}</h2>
      <button onClick={() => dispatch(buyChocolate())}>
        Buy Chocolate with hooks
      </button>
    </div>
  );
}

export default HookChocolateContainer;
