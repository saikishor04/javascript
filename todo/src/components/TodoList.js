import React from 'react'
import Todo from './Todo'
function TodoList() {
    return (
        <div className='todo-container'>
            <ul className='todo-list'></ul>
            <Todo />
        </div>
    )
}

export default TodoList
