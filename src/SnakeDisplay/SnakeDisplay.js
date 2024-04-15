import { useState, useEffect } from 'react'
import './SnakeDisplay.css'

export default function({ currentSnakes }) {
    const [ displayedSnake, setDisplayedSnake ] = useState({})
    const [ panicMode, setPanicMode ] = useState(false)
    const [ imageTitle, setImageTitle ] = useState('Look at this Snake')
    const [ snakeCounter, setSnakeCounter ] = useState(0)

    useEffect(() => {
        if(currentSnakes.length > 0) {
            setDisplayedSnake(currentSnakes[snakeCounter])
        }
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
      }, [])

    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
      }, [])

    useEffect(() => {
        if(panicMode) {
            console.log('here')
            setImageTitle('Remember to Breathe') 
        } else {
            console.log('actually here')
            setImageTitle('Look at this Snake')
        }
    }, [panicMode])

    function handleKeyPress(event) {
        if (event.key === ' ') {
            setPanicMode(true)
      }
    }

    function handleKeyUp(event) {
        if (event.key === ' ') {
            setPanicMode(false)
      }
    }

    function advanceSnake() {
        setSnakeCounter(prev => prev + 1)
    }


    return (
        <>
            <h2>{imageTitle}</h2>
            {panicMode ?
                <img src='/assets/cute-doodle.jpg' alt="cute puppy" />
                :
                displayedSnake.image && <img src={displayedSnake.image} alt={`image of ${displayedSnake.name}`} />
            }
            <button onClick={advanceSnake}>I'm ready to see the next snake</button>
        </>
    )
}