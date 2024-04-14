import './App.css';
import { useState, useEffect } from 'react'
import { getData } from '../apiCalls'
import LandingPage from '../LandingPage/LandingPage'


function App() {
const [zones, setZones] = useState([])
const [snakes, setSnakes] = useState([])



useEffect(() => {
  getData()
  .then(([zones, snakes]) => {
    const preppedSnakes = snakes.snakes.map((snake) => {
      return {
        ...snake,
        isCurrent: false,
        isDisplayed: false,
        isFavorite: false
      }
    })

    setZones(zones.zones)
    setSnakes(preppedSnakes)
  })
}, [])




  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
