import { useState } from 'react'
import { useEffect } from 'react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("Karachi")
  const [loading, setloading] = useState(false)
  const [temp, settemp] = useState("")

useEffect(()=>{
  setloading(true)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${count}&appid=1f136667cfcdb418bf8b7a4c5a542f00`)
            .then(res=>res.json())
            .then(json=>{
              settemp( Math.floor(json.main.temp-273.5))
              console.log(json.main.temp-273.5)
              setloading(false)
            })
},[count])

const  handle =(e)=>{
  setCount(e.target.value)
}

const popularCities = [
  "Karachi",
  "Tokyo",
  "New York",
  "Paris",
  "London",
  "Shanghai",
  "Los Angeles",
  "Beijing",
  "Mumbai",
  "Moscow",
  "Hong Kong",
  "São Paulo",
  "Dubai",
  "Singapore",
  "Bangkok",
  "Istanbul",
  "Sydney",
  "Seoul",
  "Mexico City",
  "Berlin",
  "Madrid",
];

const month1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dat2 = new Date()
let month = dat2.getMonth()
console.log(month1[month])
const d = new Date();
let day = d.getDate();

  return (
    <>

    <div> 
      <div id='uol'><select name="country" onChange={handle} value={count} id="">
    {popularCities.map((data,ind)=>(
      <option key={ind}>{data}</option>))}
  </select>
</div>

























<div>
<div class="card">
  <div class="container">
    <div class="cloud front">
      <span class="left-front"></span>
      <span class="right-front"></span>
    </div>
    <span class="sun sunshine"></span>
    <span class="sun"></span>
    <div class="cloud back">
      <span class="left-back"></span>
      <span class="right-back"></span>
    </div>
  </div>

  <div class="card-header">
    <span>{count}</span>
    <span>{month1[month]} {day+1} </span>
  </div>

  <span class="temp">{temp}°</span>

  <div class="temp-scale">
    <span>Celcius</span>
  </div>
</div>
</div>

  </div>
 
    </>
  )
}

export default App
