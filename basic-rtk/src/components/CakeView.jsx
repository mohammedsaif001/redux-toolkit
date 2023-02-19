import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from '../store/slices/cakeSlice'

const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cake - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(3))}>Restock Cake</button>
        </div>
    )
}

export default CakeView