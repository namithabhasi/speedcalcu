import React from 'react'
import  { useState } from 'react';
function Calculator() {
    const [distance, setDistance] = useState('');
  const [speed, setSpeed] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    if (distance && time ) {
      setResult('Speed = ' + (distance / time));
    } else if (speed && time && !distance) {
      setResult('Distance = ' + (speed * time));
    } else if (distance && speed && !time) {
      setResult('Time = ' + (distance / speed));
    } else {
      setResult('please fill all the input boxes');
    }
  };

  const handleReset = () => {
    setDistance('');
    setSpeed('');
    setTime('');
    setResult('');
  };
  return (
    <div>
        <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Speed Calculator</h2>
      <input
        type="number"
        placeholder="Distance"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        style={{ display: 'block', margin: '10px auto', padding: '5px' }}
      />
      {/* <input
        type="number"
        placeholder="Speed"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        style={{ display: 'block', margin: '10px auto', padding: '5px' }}
      /> */}
      <input
        type="number"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={{ display: 'block', margin: '10px auto', padding: '5px' }}
      />
      <button onClick={handleCalculate} style={{ marginRight: '10px' }}>Calculate</button>
      <button onClick={handleReset}>Reset</button>
      {result && <h3 style={{ marginTop: '20px' }}>{result}</h3>}
    </div>
      
    </div>
  )
}

export default Calculator
