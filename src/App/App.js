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
const [userData, setUserData] = useState({'Level1': [], 'Level2': [], 'Level3': [], 'Level4': [],})
const [currentLevel, setCurrentLevel] = useState('')

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
    setCurrentLevel('Level1')
  } else if (level === '2') {
    snakeSet = snakes.filter((snake) => {
      return !snake.isVenemous && snake.isAggressive
    })
    setCurrentLevel('Level2')
  } else if (level === '3') {
    snakeSet = snakes.filter((snake) => {
      return snake.isVenemous && !snake.isAggressive
    })
    setCurrentLevel('Level3')
  } else if (level === '4') {
    snakeSet = snakes.filter((snake) => {
      return snake.isVenemous && snake.isAggressive
    })
    setCurrentLevel('Level4')
  }

  snakeSet[0].isDisplayed = true
  setCurrentSnakes(snakeSet)
}

function updateUserData(snake, data) {
  const newSnakeData = {snake: snake.name, stressBefore: data.before, stressAfter: data.after}
  const updatedUser = {...userData, [currentLevel]: [...userData[currentLevel], newSnakeData]}

  setUserData(updatedUser)
}

function resetData() {
  setUserData({'Level1': [], 'Level2': [], 'Level3': [], 'Level4': [],})
  setCurrentSnakes([])
  setCurrentLevel('')
}

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage filterSnakes={filterSnakes}/>} />
        <Route path='/game' element={<Game
                                        currentSnakes={currentSnakes}
                                        updateUserData={updateUserData}
                                        userData={userData}
                                        currentLevel={currentLevel}
                                        resetData={resetData} />} />
        <Route path='*' element={<Error />} />
        <Route path='/error' element={<Error />} />
      </Routes>
      
    </>
  );
}

export default App;
