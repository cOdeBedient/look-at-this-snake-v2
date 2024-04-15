import './Game.css'
import { useState, useEffect } from 'react'

export default function Game({ currentSnakes }) {
    const [ displayedSnake, setDisplayedSnake ] = useState({})

    useEffect(() => {
        if(currentSnakes[0]) {
            setDisplayedSnake(currentSnakes.find(snake => snake.isDisplayed))
        }
    })

    return (
        <>
            <h1 className="game-title">Remember to Breathe</h1>
            { displayedSnake.image && <img src={displayedSnake.image} alt={`image of ${displayedSnake.name}`} /> }
        </>
    )
}