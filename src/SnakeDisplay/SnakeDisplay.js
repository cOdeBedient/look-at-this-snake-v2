import { useState, useEffect } from 'react'
import { StyledSnakeDisplay } from './SnakeDisplay.styled'
import Results from '../Results/Results'
import Counter from '../Counter/Counter'
import EvaluationForm from '../EvaluationForm/EvaluationForm'
import PropTypes from 'prop-types'

// const STORED_SNAKE = JSON.stringify({})
// sessionStorage.setItem(STORED_SNAKE, JSON.stringify({}));
// const STORED_SNAKES_W_PICS = []
// sessionStorage.setItem(STORED_SNAKES_W_PICS, []);

export default function SnakeDisplay({ snakes, currentLevel, userData, updateUserData, resetUserData }) {
    const [ displayedSnake, setDisplayedSnake ] = useState({})
    // const [ displayedSnake, setDisplayedSnake ] = useState(sessionStorage.getItem(STORED_SNAKE))
    const [ panicMode, setPanicMode ] = useState(false)
    const [ imageTitle, setImageTitle ] = useState('Take 5 deep breaths, and then click the box to begin.')
    const [ snakeCounter, setSnakeCounter ] = useState(-1)
    const [ finished, setFinished ] = useState(false)
    const [ snakesWithPics, setSnakesWithPics ] = useState([])
    const [ puppy, setPuppy ] = useState('')
    const [ boxHidden, setBoxHidden] = useState('')
    const [ snakeHidden, setSnakeHidden] = useState('hidden')
    const [ currentSnakes, setCurrentSnakes] = useState([])

    useEffect(() => {
        resetData()
        filterSnakes()
    }, [snakes])


    function filterSnakes() {
        let retrievedLevel = currentLevel
        if (!sessionStorage.getItem("STORED_LEVEL")) {
            sessionStorage.setItem("STORED_LEVEL", JSON.stringify(currentLevel))
        } else if (!currentLevel) {
            retrievedLevel = (JSON.parse(sessionStorage.getItem("STORED_LEVEL")))
        }

        if(snakes.length > 0) {
            let snakeSet;
            if (retrievedLevel === 'Level1') {
                snakeSet = snakes.filter((snake) => {
                    return !snake.isVenemous && !snake.isAggressive
                })
            } else if (retrievedLevel === 'Level2') {
                snakeSet = snakes.filter((snake) => {
                    return !snake.isVenemous && snake.isAggressive
                })
            } else if (retrievedLevel === 'Level3') {
                console.log('inside this piece')
                snakeSet = snakes.filter((snake) => {
                    return snake.isVenemous && !snake.isAggressive
                })
            } else if (retrievedLevel === 'Level4') {
                snakeSet = snakes.filter((snake) => {
                    return snake.isVenemous && snake.isAggressive
                })
            }
            console.log('and snakeset is', snakeSet)
            snakeSet[0].isDisplayed = true
            setCurrentSnakes(snakeSet)
            setDisplayedSnake(snakeSet[0])
        }
      }
      
      function resetData() {
        // resetUserData()
        setCurrentSnakes([])
      }

    useEffect(() => {
       const puppyPic = new Image()
       puppyPic.src = '/assets/cute-doodle.jpg'

       setPuppy(puppyPic)
    }, [currentSnakes])

    useEffect(() => {
        if(currentSnakes) {
            if(currentSnakes.length > 0 && snakeCounter === -1) {
                //switch these back to zero
                setDisplayedSnake(currentSnakes[0])
                setSnakeCounter(0)
            }
        }
    })

    function flicker(ms) {
        setTimeout(() => {   
            setPanicMode(prev => !prev)
            // toggleTitle()
        }, ms)
    }

    // function toggleTitle() {
    //     if(imageTitle === 'Look at this Snake: ') {
    //         console.log('here')
    //         setImageTitle('Look at this Dog: ')
    //     } else {
    //         console.log('there')
    //         setImageTitle('Look at this Snake: ')
    //     }
    // }

    function runTest() {
        setImageTitle("You're ok! I'm here to help!")
        setTimeout(() => {setImageTitle('Look at this Dog: ')}, 4000)
        for(var i=0; i<=4000; i+=500) {
            flicker(i)
        }
    }

    function advanceSnake(event) {
        if(snakeCounter < currentSnakes.length - 1) {
            setSnakeCounter(prev => prev + 1)
            setPanicMode(false)
            setImageTitle('Look👀 at this Snake: ')
            setDisplayedSnake(currentSnakes[snakeCounter + 1])
        } else {
            setFinished(true)
        }
    }

    function clickBox() {
        setSnakeHidden('')
        setBoxHidden('hidden')
        setImageTitle('Look👀 at this Snake: ')
    }

    console.log('boxHidden', boxHidden)
    console.log('ds image', displayedSnake.image)

    return (
        <StyledSnakeDisplay>
            {finished ?
                <Results resetData={resetData}  />
                :
                <>
                    {/* <img className='dog-head' src='/assets/doodle-head.png' alt="cute puppy" /> */}
                    <section className="snake-display">
                        <p className="snake-title">{imageTitle}</p>
                        <div className="snake-photos-container">
                            <div className="snake-and-counter">
                                <Counter currentSnakes={currentSnakes} snakeCounter={snakeCounter} />
                                {panicMode ?
                                    <img className="box-pic" src='/assets/cute-doodle.jpg' alt="cute puppy" />
                                    :
                                    displayedSnake.image &&
                                    <>
                                        <img className={`${snakeHidden} box-pic`}  src={displayedSnake.image} alt={`image of ${displayedSnake.name}`} />
                                        <div onClick={clickBox} className={`start-box ${boxHidden}`} tabIndex="1"></div>
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
                </>
            }
        </StyledSnakeDisplay>
    )
}

SnakeDisplay.propTypes = {
    snakes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        isVenemous: PropTypes.bool.isRequired,
        isAggressive: PropTypes.bool.isRequired,
        isFavorite: PropTypes.bool.isRequired
    })).isRequired
}