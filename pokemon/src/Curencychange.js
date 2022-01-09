import React from 'react'

export default function Curencychange(props) {

    const {currencyOptions} = props
    return (
        <div>
            <input type='number' className='input' />
            <select>
                {
                    currencyOptions.map(option => 
                    (<option key={option} value={option}>{option}</option>))
                }
                
            </select>
        </div>
    )
}
