import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from '../store/slices/iceCreamSlice'

const IceCreamView = () => {
    const numberOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream)
    const [restockIceCream, setRestockIceCream] = useState(1)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of IceCreams - {numberOfIceCream}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
            <input type="number" name="restockIceCream" value={restockIceCream} onChange={(e) => setRestockIceCream(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(restockIceCream))}>Restock Ice Cream</button>
        </div>
    )
}

export default IceCreamView