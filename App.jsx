import React, { useState } from 'react'
import './app.scss'

const App = () => {
const[celsius,setCelsuius]=useState('');
const[fahrenheit,setFahrenheit]=useState('');

function handleCelsius(){
  const celsiusValue=parseFloat(document.getElementById("inputmonu").value);
  if(!isNaN(celsiusValue)){
    setFahrenheit((celsiusValue*9/5)+32);
  }else{
    setFahrenheit('');
  }
}

function handleFahrenhieit(){
  const fahranValue=parseFloat(document.getElementById("inputmonu").value);
  if(!isNaN(fahranValue)){
    setCelsuius((fahranValue-32)*5/9);
  }else{
    setCelsuius('');
  }
}
  return (
    <div className='container'>
      <h1>Temperature Converter</h1>
      <input id='inputmonu' type="text" />
      <button onClick={handleCelsius}>Faranhiet</button>
      <button onClick={handleFahrenhieit}>Celsius</button>
      <div>
        {fahrenheit!=='' && <p>{fahrenheit} F</p>}
        {celsius!=='' && <p>{celsius} C</p>}
      </div>
    </div>
  )
}

export default App