import React,{useEffect,useState} from 'react'
 import './App.css';
import Currencychange from './Curencychange'

const BASE_URL = 'http://openexchangerates.org/latest/json'

function App() {
  const[currencyOptions , setCurrencyOptions]=useState([])

  useEffect(()=>{
    fetch(BASE_URL).then(res =>{
    
      setCurrencyOptions(res.base,...Object.keys(res.rates))
    })
  },[])
  return (
    <> 
    <h1>Convert</h1>
    <Currencychange 
    currencyOptions = {currencyOptions}
    />
    <div class='equals'>=</div>
    <Currencychange 
    currencyOptions = {currencyOptions}
     />
    </>
  );
}

export default App;
