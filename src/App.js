import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [pic,setPic] = useState('https://i.ibb.co/zXhQ2Sz/red-traffic-light.png')
  const [activity, setActivity] = useState('Not Active')
  useEffect(() => {
  }, [pic]) 
  
  function start_timer(){
    setPic('https://i.ibb.co/zXhQ2Sz/red-traffic-light.png')
    setActivity('Active')
    setTimeout(() =>{
      set_green()
    }, 5000)
  }

  function set_green(){
    setPic('https://i.ibb.co/6yTfSHg/green-traffic-light.png')
    console.log('green')
      setTimeout(() =>{
        set_yellow()
      }, 5000)
  }
  function set_yellow(){
    setPic('https://i.ibb.co/fqc9D2M/yellow-traffic-light.png')
    console.log('yellow')
      setTimeout(() =>{
        set_red()
      }, 3000)
  }
  function set_red(){
    setPic('https://i.ibb.co/zXhQ2Sz/red-traffic-light.png')
    console.log('red')
      setTimeout(() =>{
      set_green()
    }, 5000)
  }

  function stop_timer(){
    window.location.reload(false);
    setActivity('Not Active')
    setPic('https://i.ibb.co/zXhQ2Sz/red-traffic-light.png')
  }

  function override(e){
    e.preventDefault()
    console.log(e)
    const value = e.target.value
    console.log(value)
    if(value === 'red'){
      setPic('https://i.ibb.co/zXhQ2Sz/red-traffic-light.png')
    } 
    if(value === 'yellow'){
      setPic('https://i.ibb.co/fqc9D2M/yellow-traffic-light.png')
    }
    if(value === 'green'){
      setPic('https://i.ibb.co/6yTfSHg/green-traffic-light.png')
    }
  }

  return (
    <div className="App">
      <div class="traffic-light">
      <img class="color" src ={pic}/>
    </div>
    <div>
        <button onClick={start_timer} class="start">Start Timer</button>
        <button onClick={stop_timer} class="stop">Stop Timer</button>
        <div>
            Manual Override: <select onChange={override} name="Manual Override" class="selection">
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>
        </div>
    </div>
    <div class="activity">Timer is {activity}</div>
    </div>
)};

export default App;
