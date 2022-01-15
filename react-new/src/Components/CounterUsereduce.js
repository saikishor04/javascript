import React ,{useReducer} from 'react'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'
const initialState = 0

function reducer(state,action){
switch(action){
    case INCREMENT : 
    return state+1;
    case DECREMENT:
        return state-1;
    case RESET:
        return initialState;
    default:
        return state;
}

}

function CounterUsereduce() {
    const[state,dispatch] = useReducer(reducer,initialState)
    return (
        <>
            <div className='count-info'>Count: {state}</div>
            <div className='button'>
            <button className='increment' onClick={()=> dispatch(INCREMENT)}>Increment</button>
            <button className='decrement' onClick={()=> dispatch(DECREMENT)}>Decrement</button>
            <button className='reset' onClick={()=> dispatch(RESET)}>Reset</button>
            </div>
        </>
    )
}

export default CounterUsereduce
