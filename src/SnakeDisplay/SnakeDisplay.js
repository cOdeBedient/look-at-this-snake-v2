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

export default function SnakeDisplay({ snakes, currentLevel }) {
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
    const [currentSnakes, setCurrentSnakes] = useState([])
    const [userData, setUserData] = useState({'Level1': [], 'Level2': [], 'Level3': [], 'Level4': [],})


    useEffect(() => {
        filterSnakes(currentLevel)
    }, [currentLevel])

    function filterSnakes(level) {
        let snakeSet;
        if (currentLevel === 'Level1') {
          snakeSet = snakes.filter((snake) => {
            return !snake.isVenemous && !snake.isAggressive
          })
        } else if (currentLevel === 'Level2') {
          snakeSet = snakes.filter((snake) => {
            return !snake.isVenemous && snake.isAggressive
          })
        } else if (currentLevel === 'Level3') {
          snakeSet = snakes.filter((snake) => {
            return snake.isVenemous && !snake.isAggressive
          })
        } else if (currentLevel === 'Level4') {
          snakeSet = snakes.filter((snake) => {
            return snake.isVenemous && snake.isAggressive
          })
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


    useEffect(() => {
        console.log(sessionStorage.getItem("STORED_SNAKES"))
        if (!sessionStorage.getItem("STORED_SNAKES")) {
            sessionStorage.setItem("STORED_SNAKES", JSON.stringify(currentSnakes));
        } else {
            console.log('here')
            currentSnakes = JSON.parse(sessionStorage.getItem("STORED_SNAKES"))
            console.log('currentSnakes here', currentSnakes)
        }
    }, []);

    console.log("currentSnakes", currentSnakes)


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

    // useEffect(() => {
    //     sessionStorage.setItem("STORED_SNAKE", JSON.stringify(displayedSnake));
    // }, [displayedSnake]);

    // console.log(sessionStorage.getItem("STORED_SNAKE"))


    


    useEffect(() => {
        if(snakesWithPics.length > 0 && snakeCounter === -1) {
            setDisplayedSnake(snakesWithPics[0])
            setSnakeCounter(0)
        }
    })

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
            setSnakeCounter(prev => prev + 1)
            setPanicMode(false)
            setImageTitle('Look at this Snake: ')
            setDisplayedSnake(snakesWithPics[snakeCounter + 1])
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
                <Results userData={userData} currentLevel={currentLevel} resetData={resetData}  />
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
                                    <img className={`${snakeHidden}`} src={displayedSnake.image.src} alt={`image of ${displayedSnake.name}`} />
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