import React,{useState} from 'react'

function HookCounterThree() {
    const [name,setName] = useState({firstName:"",lastName:""})

    return (
        <div>
            <form>
                <input type='text' value ={name.firstName} onChange={e => setName({...name , firstName : e.target.value})} />
                <input type='text' value={name.lastName} onChange={e =>setName({...name , lastName:e.target.value})}/>
                <h1>Your firstname is : {name.firstName}</h1>
                <h1>Your lastname is : {name.lastName}</h1>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree
