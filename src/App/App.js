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
const [ userData, setUserData] = useState({'Level1': [], 'Level2': [], 'Level3': [], 'Level4': []})

function handleError(error) {
  navigate('/error')
}

function getLevel(level) {
  setCurrentLevel(`Level${level}`)
}

function updateUserData(snake, data) { 
  const newSnakeData = {snake: snake.name, stressBefore: data.before, stressAfter: data.after}
  const updatedUser = {...userData, [currentLevel]: [...userData[currentLevel], newSnakeData]}

  setUserData(updatedUser)
}

function resetUserData() {
  setUserData({'Level1': [], 'Level2': [], 'Level3': [], 'Level4': []})
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

console.log({snakes})

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage getLevel={getLevel}/>} />
        <Route path='/game' element={<Game snakes={snakes} currentLevel={currentLevel} userData={userData} updateUserData={updateUserData} resetUserData={resetUserData}/>} />
        <Route path='/results' element={<Results userData={userData} currentLevel={currentLevel} resetUserData={resetUserData} />} />
        <Route path='*' element={<Error />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
