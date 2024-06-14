import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {

  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(60);

  function onWeightChange(event){
    setWeight(event.target.value);
  }

  function onHeightChange(event){
    setHeight(event.target.value);
  }

  const Output = useMemo( ()=>{
      const calculateHeight = height/100;
      return (weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height]);
  return (
    <main>
      <h1>Project: BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} Kg</p>
        <input className='input-slider'
          type='range'
          step="1"
          min="40"
          max="200" 
          onChange={onWeightChange}/>
        <p className='slider-output'>Height: {height} cm</p>
        <input className='input-slider'
          type="range"
          min = "40"
          max = "250"
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{Output}</p>
      </div>

    </main>
  )
}

export default App