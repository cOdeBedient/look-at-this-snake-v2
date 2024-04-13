import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import puppyHome from './puppy-wide-blue-background.jpg'

function App() {
const [zones, setZones] = useState([])
const [snakes, setSnakes] = useState([])

 function fetchZones() {
  return fetch('http://localhost:3000/api/v1/noSnakeZones/')
    .then(res => res.json())
    .then(zones => setZones(zones))
 }

 function fetchSnakes() {
  return fetch('http://localhost:3000/api/v1/snakes/')
    .then(res => res.json())
    .then(snakes => setSnakes(snakes))
 }

useEffect(() => {
  fetchZones()
  fetchSnakes()
}, [])


 console.log('zones', zones)
 console.log('snakes', snakes)



  return (
    <main>
      <h1>No Snake Zones</h1>
    </main>
  );
}

export default App;
