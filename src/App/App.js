import './App.css';
import { useState, useEffect } from 'react'
import { getData } from '../apiCalls'


function App() {
const [zones, setZones] = useState([])
const [snakes, setSnakes] = useState([])



useEffect(() => {
  getData()
  .then(([zones, snakes]) => {
    console.log("snakes", snakes)
    console.log("zones", zones)
    setZones(zones.zones)
    setSnakes(snakes.snakes)
  })
}, [])




  return (
    <main>
      <h1>No Snake Zones</h1>
      {snakes.length > 0 && <img src={snakes[0].image} />}
    </main>
  );
}

export default App;
