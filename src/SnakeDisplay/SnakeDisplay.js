import { useState, useEffect } from 'react'
import './SnakeDisplay.css'
import Decompression from '../Decompression/Decompression'
import Counter from '../Counter/Counter'

export default function({ currentSnakes }) {
    const [ displayedSnake, setDisplayedSnake ] = useState({})
    const [ panicMode, setPanicMode ] = useState(false)
    const [ imageTitle, setImageTitle ] = useState('Look at this Snake')
    const [ snakeCounter, setSnakeCounter ] = useState(0)
    const [ finished, setFinished ] = useState(false)

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
            setImageTitle('Look at this Snake:')
        }
    }, [panicMode])

    function handleKeyPress(event) {
        if (event.key === 'b') {
            setPanicMode(true)
      }
    }

    function handleKeyUp(event) {
        if (event.key === 'b') {
            setPanicMode(false)
      }
    }

    function advanceSnake(event) {
        if(snakeCounter < currentSnakes.length - 1) {
            setSnakeCounter(prev => prev + 1)
        } else {
            setFinished(true)
        }
    }


    return (
        <>
            {finished ?
                <Decompression />
                :
                <section className="snake-display">
                    <p>{imageTitle}</p>
                    {panicMode ?
                        <img src='/assets/cute-doodle.jpg' alt="cute puppy" />
                        :
                        displayedSnake.image && <img src={displayedSnake.image} alt={`image of ${displayedSnake.name}`} />
                    }
                    <Counter currentSnakes={currentSnakes} snakeCounter={snakeCounter} />
                    <button onClick={event => advanceSnake(event)}>I'm ready to see the next snake</button>
                </section>
            }
        </>
    )
}