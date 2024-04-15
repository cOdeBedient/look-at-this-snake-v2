import './App.css';
import { useState, useEffect } from 'react'
import { getData } from '../apiCalls'
import LandingPage from '../LandingPage/LandingPage'
import Error from '../Error/Error'
import Game from '../Game/Game'
import { Route, Routes } from 'react-router-dom'


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

function filterSnakes(level) {
  console.log('level in filter', level)
}




  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage filterSnakes={filterSnakes}/>} />
        <Route path='/game' element={<Game />} />
        <Route path='*' element={<Error />} />
        <Route path='/error' element={<Error />} />
      </Routes>
      
    </>
  );
}

export default App;
