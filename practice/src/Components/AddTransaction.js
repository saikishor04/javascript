import React,{useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

function AddTransaction() {
    const [text,setText] = useState('')
    const[amount,setAmount]= useState(0)
    const {addTransaction} = useContext(GlobalContext)

    const textHandler = (event)=>{
        setText(event.target.value);
    }
    const amountHandler =(event) =>{
        setAmount(event.target.value)
    }
    
    const submitHandler=(e)=>{
      e.preventDefault()

      const newTransaction = {
        id : Math.floor(Math.random()*100),
        text,
        amount: +amount 
      }
      addTransaction(newTransaction);
    }
    return (
        <>
         <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
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
