import React, {useState} from 'react'

function SampleMessage() {
    const[input,setInput] = useState('')
    const[messages,setMessages]=useState([])
    const handleChange =(e)=>{
        setInput(e.target.value)
    }
    const handleClick = () =>{
        setInput('')
        setMessages([...messages,input])
    }
    return (
        <div>
            <h2>Type a message:</h2>
            <input type='text' onChange={handleChange} value ={input} />
            <button onClick={handleClick}>Submit</button>
            <ul>
                {
                    messages.map(msg =>
                       ( <li key={msg}>{msg}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SampleMessage
