import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {buyIceCream} from '../redux'

function HookIceCreamContainer() {
    const numberOfIceCreams = useSelector((state) => state.iceCream.numberOfIceCreams) //todo se pone cake aqui por que se hizo la combinacion de reducers y el nombre de la propiedad es IceCream
    const dispatch = useDispatch ()
    return (
        <div>
            <h2> IceCream with Redux React hooks - {numberOfIceCreams}</h2>
            <button onClick={()=> dispatch(buyIceCream())}>Buy Ice Cream with hooks</button>
        </div>
    )
}

export default HookIceCreamContainer
