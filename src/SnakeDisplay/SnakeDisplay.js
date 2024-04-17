import { useState, useEffect } from 'react'
import './SnakeDisplay.css'
import Decompression from '../Decompression/Decompression'
import Counter from '../Counter/Counter'
import EvaluationForm from '../EvaluationForm/EvaluationForm'

export default function({ currentSnakes }) {
    const [ displayedSnake, setDisplayedSnake ] = useState({})
    const [ panicMode, setPanicMode ] = useState(false)
    const [ imageTitle, setImageTitle ] = useState('Look at this Snake')
    const [ snakeCounter, setSnakeCounter ] = useState(0)
    const [ finished, setFinished ] = useState(false)
    const [ snakesWithPics, setSnakesWithPics ] = useState([])

    useEffect(() => {
        const updatedPicSnakes = currentSnakes.map((snake) => {
            const snakePic = new Image()
            snakePic.src = snake.image
            snake.image = snakePic

            return snake
       })
       
       setSnakesWithPics(updatedPicSnakes)
    }, [currentSnakes])


    useEffect(() => {
        console.log("snakesWithPics line 28", snakesWithPics)
        if(snakesWithPics.length > 0) {
            setDisplayedSnake(snakesWithPics[snakeCounter])
        }
    })

    // useEffect(() => {
    //     document.addEventListener('keydown', handleKeyPress)
    //     return () => {
    //         document.removeEventListener('keydown', handleKeyPress);
    //     };
    //   }, [])

    // useEffect(() => {
    //     document.addEventListener('keyup', handleKeyUp)
    //     return () => {
    //         document.removeEventListener('keyup', handleKeyUp);
    //     };
    //   }, [])

    useEffect(() => {
        if(panicMode) {
            setImageTitle('Remember to Breathe') 
        } else {
            setImageTitle('Look at this Snake:')
        }
    }, [panicMode])

    // function handleKeyPress(event) {
    //     if (event.key === 'b') {
    //         setPanicMode(true)
    //   }
    // }

    // function handleKeyUp(event) {
    //     if (event.key === 'b') {
    //         setPanicMode(false)
    //   }
    // }

    function flicker(ms) {
        setTimeout(() => {setPanicMode(prev => !prev)}, ms)
    }

    function runTest() {
        for(var i=100; i<3200; i+=100) {
            flicker(i)
        }
    }

    function advanceSnake(event) {
        console.log('here and snakes with pics is', snakesWithPics)
        if(snakeCounter < snakesWithPics.length - 1) {
            setPanicMode(false)
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
                    <p className="snake-title">{imageTitle}</p>
                    <div className="snake-photos-container">
                        <Counter currentSnakes={currentSnakes} snakeCounter={snakeCounter} />
                        {panicMode ?
                            <img src='/assets/cute-doodle.jpg' alt="cute puppy" />
                            :
                            displayedSnake.image && <img src={displayedSnake.image.src} alt={`image of ${displayedSnake.name}`} />
                        }
                        <EvaluationForm advanceSnake={advanceSnake} runTest={runTest}/>
                    </div> 
                </section>
            }
        </>
    )
}