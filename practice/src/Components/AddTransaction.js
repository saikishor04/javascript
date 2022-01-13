import React,{useState} from 'react'

function AddTransaction() {
    const [text,setText] = useState('')
    const[amount,setAmount]= useState(0)
    const textHandler = (event)=>{
        setText(event.target.value);
    }
    const amountHandler =(event) =>{
        setAmount(event.target.value)
    }
    return (
        <>
         <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={textHandler} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={amountHandler} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}

export default AddTransaction
