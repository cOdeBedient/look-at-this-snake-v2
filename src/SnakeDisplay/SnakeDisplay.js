import { useState, useEffect } from 'react'
import { StyledSnakeDisplay } from './SnakeDisplay.styled'
import Results from '../Results/Results'
import Counter from '../Counter/Counter'
import EvaluationForm from '../EvaluationForm/EvaluationForm'
import PropTypes from 'prop-types'

export default function SnakeDisplay({ currentSnakes, updateUserData, userData, currentLevel, resetData }) {
    const [ displayedSnake, setDisplayedSnake ] = useState({})
    const [ panicMode, setPanicMode ] = useState(false)
    const [ imageTitle, setImageTitle ] = useState('Take 5 deep breaths, and then click the box to begin.')
    const [ snakeCounter, setSnakeCounter ] = useState(0)
    const [ finished, setFinished ] = useState(false)
    const [ snakesWithPics, setSnakesWithPics ] = useState([])
    const [ puppy, setPuppy ] = useState('')
    const [ boxHidden, setBoxHidden] = useState('')
    const [ snakeHidden, setSnakeHidden] = useState('hidden')


    useEffect(() => {
        const updatedPicSnakes = currentSnakes.map((snake) => {
            const snakePic = new Image()
            snakePic.src = snake.image
            snake.image = snakePic

            return snake
       })
       
       const puppyPic = new Image()
       puppyPic.src = '/assets/cute-doodle.jpg'

       setPuppy(puppyPic)
       setSnakesWithPics(updatedPicSnakes)
    }, [currentSnakes])


    useEffect(() => {
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

    // useEffect(() => {
    //     if(panicMode) {
    //         setImageTitle('Remember to Breathe') 
    //     } else {
    //         setImageTitle('Look at this Snake:')
    //     }
    // }, [panicMode])

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
        setImageTitle('processing...')
        setTimeout(() => {setImageTitle('Look at this Dog: ')}, 3200)
        for(var i=100; i<3150; i+=100) {
            flicker(i)
        }
    }

    function advanceSnake(event) {
        if(snakeCounter < snakesWithPics.length - 1) {
            setPanicMode(false)
            setSnakeCounter(prev => prev + 1)
            setImageTitle('Look at this Snake: ')
        } else {
            setFinished(true)
        }
    }

    function clickBox() {
        setSnakeHidden('')
        setBoxHidden('hidden')
        setImageTitle('Look at this Snake: ')
    }

    return (
        <StyledSnakeDisplay>
            {finished ?
                <Results userData={userData} currentLevel={currentLevel} resetData={resetData} />
                :
                <section className="snake-display">
                    <p className="snake-title">{imageTitle}</p>
                    <div className="snake-photos-container">
                        <div className="snake-and-counter">
                            <Counter currentSnakes={currentSnakes} snakeCounter={snakeCounter} />
                            {panicMode ?
                                <img src={puppy.src} alt="cute puppy" />
                                :
                                displayedSnake.image &&
                                <>
                                    <div className={`${snakeHidden}`}><img src={displayedSnake.image.src} alt={`image of ${displayedSnake.name}`} /></div>
                                    <div><div onClick={clickBox} className={`start-box ${boxHidden}`}></div></div>
                                </>
                            }
                        </div>
                        <EvaluationForm
                            snakeHidden={snakeHidden}
                            advanceSnake={advanceSnake}
                            runTest={runTest}
                            displayedSnake={displayedSnake}
                            updateUserData={updateUserData}
                            snakeCounter={snakeCounter}
                            />
                    </div> 
                </section>
            }
        </StyledSnakeDisplay>
    )
}

SnakeDisplay.propTypes = {
    currentSnakes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isVenemous: PropTypes.bool.isRequired,
        isAggressive: PropTypes.bool.isRequired,
        isFavorite: PropTypes.bool.isRequired
    })).isRequired
}