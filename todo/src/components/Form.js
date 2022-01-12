
import React , {useState} from 'react'

function Form() {
    const[inputText, setInputText] = useState('')
    const[todos, setTodos] = useState([]);

    const inputTextHandler = (e)=>{
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText , completed : false , id : Math.random()*100}
        ])
        setInputText('')
    }
    return (
       <form>
           <input type="text" className="todo-input" value={inputText} onChange={inputTextHandler}/>
           <button onClick = {submitTodoHandler} type="submit" className='todo-button' >
               <i className='fas fa-plus-square'></i>
           </button>
           <div>
               <select name="todos" className='filter-todo'>
                   <option value="All">All</option>
                   <option value="Completed">Completed</option>
                   <option value="UnCompleted">Uncompleted</option>
               </select>
           </div>
       </form>
    )
}

export default Form
