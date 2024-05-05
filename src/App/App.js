import { useState, useEffect } from 'react'
import { getData } from '../apiCalls'
import LandingPage from '../LandingPage/LandingPage'
import Error from '../Error/Error'
import Game from '../Game/Game'
import Results from '../Results/Results'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
const [zones, setZones] = useState([])
const [snakes, setSnakes] = useState([])
const navigate = useNavigate()
const [currentLevel, setCurrentLevel] = useState('')

function handleError(error) {
  navigate('/error')
}

function getLevel(level) {
  setCurrentLevel(`Level${level}`)
}

useEffect(() => {
  getData()
  .then(([zones, snakes]) => {
    const preppedSnakes = snakes.snakes.map((snake) => {
      return {
        ...snake,
        isFavorite: false,
        isDisplayed: false
      }
    })
    
    setZones(zones.zones)
    setSnakes(preppedSnakes)
  })
  .catch(err => handleError(err))
}, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage getLevel={getLevel}/>} />
        <Route path='/game' element={<Game snakes={snakes} currentLevel={currentLevel} />} />
        <Route path='/results' element={<Results />} />
        <Route path='*' element={<Error />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
