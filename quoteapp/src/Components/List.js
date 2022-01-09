import React from 'react'

function List(props) {
    const {people} = props
    return (
        <>
            {
               people.map((person)=>{
                const{id,name,age}=person
                return (<h4 key={id}>{name} {age}</h4>)
               }) 
            }
        </>
    )
}

export default List
