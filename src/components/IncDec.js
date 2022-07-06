import React from 'react'
import './indec.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from '../actions/userActions'

const App = () => {
  const myState = useSelector((state) => state.incDec)
  const dispatch = useDispatch()
  return (
    <>
    <div class="cards">
      <div>
        <h1>Welcome to React</h1>
        <h2>Increament/Decrement Counter</h2>
        <div>
        <a className='quantity_minus' title='Decrement'><span><button onClick={() => dispatch(decNumber())} >-</button> </span></a>
        <input type='text' name='quantity' className='quantity_input' value={myState} />
        <a className='quantity_plus' title='Increment'><span><button onClick={() => dispatch(incNumber())}>+</button></span></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default App