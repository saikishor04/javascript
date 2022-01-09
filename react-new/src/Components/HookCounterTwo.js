
import React,{useState} from 'react'

function HookCounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFive = (e)=>{
            setCount(prevState => prevState+e)
        
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
             <button onClick={() => setCount(prevState =>prevState+1)}>Increment</button>
              <button onClick={() => setCount(prevState =>prevState-1)}>Decrement</button>
               <button onClick={() => incrementFive(5)}>Increment by 5</button>
        </div>
    )
}

export default HookCounterTwo
