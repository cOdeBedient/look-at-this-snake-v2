import './App.css';
import { useState, useEffect } from 'react'
import { getData } from '../apiCalls'
import LandingPage from '../LandingPage/LandingPage'
import Error from '../Error/Error'
import Game from '../Game/Game'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function App() {
const [zones, setZones] = useState([])
const [snakes, setSnakes] = useState([])
const [currentSnakes, setCurrentSnakes] = useState([])
const navigate = useNavigate()

function handleError(error) {
  navigate('/error')
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

function filterSnakes(level) {
  let snakeSet;
  if (level === '1') {
    snakeSet = snakes.filter((snake) => {
      return !snake.isVenemous && !snake.isAggressive
    })
  } else if (level === '2') {
    snakeSet = snakes.filter((snake) => {
      return !snake.isVenemous && snake.isAggressive
    })
  } else if (level === '3') {
    snakeSet = snakes.filter((snake) => {
      return snake.isVenemous && !snake.isAggressive
    })
  } else if (level === '4') {
    snakeSet = snakes.filter((snake) => {
      return snake.isVenemous && snake.isAggressive
    })
  }

  snakeSet[0].isDisplayed = true
  setCurrentSnakes(snakeSet)
}

console.log('filteredSnakes', currentSnakes)


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage filterSnakes={filterSnakes}/>} />
        <Route path='/game' element={<Game currentSnakes={ currentSnakes }/>} />
        <Route path='*' element={<Error />} />
        <Route path='/error' element={<Error />} />
      </Routes>
      
    </>
  );
}

export default App;
