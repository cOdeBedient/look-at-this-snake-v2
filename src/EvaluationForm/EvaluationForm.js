import { StyledEvaluationForm } from "./EvaluationForm.styled"
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function EvaluationForm({ advanceSnake, runTest, snakeHidden, displayedSnake, updateUserData, snakeCounter, userData }) {
    const [ evalFormData, setEvalFormData] = useState({before: '0', after: '0'})
    const [ testHasRun, setTestHasRun ] = useState(false)

    function handleChange(event) {
        setEvalFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value 
            }
        })
    }

    function handleRunTestClick(event) {
        event.preventDefault()
        runTest()
        setTimeout(() => {setTestHasRun(true)}, 4000)
    }

    function handleNextSnakeClick(event) {
        event.preventDefault()
        moveToNextSnake()
        updateUserData(displayedSnake, evalFormData)
        
    }

    function moveToNextSnake() {
        setTestHasRun(false)
        advanceSnake()
        setEvalFormData({before: 0, after: 0})
    }

    return (
        snakeHidden === '' &&
        <StyledEvaluationForm>
                <div className="eval-form">
                    <label>Initial Anxiety (out of 10)
                        <input type="number" name="before" min="0" max="10" value={evalFormData.before} onChange={event => handleChange(event)} disabled={testHasRun} />
                    </label>
                    <button onClick={event => handleRunTestClick(event)} disabled={testHasRun}>Let's Do This!</button>
                </div>
                {testHasRun &&
                <div className="eval-form">
                    <label>Updated Anxiety Level (out of 10)
                        <input type="number" name="after" min="0" max="10" value={evalFormData.after} onChange={event => handleChange(event)} />
                    </label>
                    { snakeCounter < 9 ?
                        <button onClick={event => handleNextSnakeClick(event)}>Next Snake!</button>
                        :
                        <Link to='/results'>
                            <button>see results</button>
                        </Link>
                    }
                </div> 
            }
        </StyledEvaluationForm>
    )
}

EvaluationForm.propTypes = {
    displayedSnake: PropTypes.shape({
        name: PropTypes.string,
        isVenmous: PropTypes.bool,
        isAggressive: PropTypes.bool,
        image: PropTypes.string,
        isFavorite: PropTypes.bool
    }).isRequired,
    snakeHidden: PropTypes.string.isRequired,
    snakeCounter: PropTypes.number.isRequired,
    advanceSnake: PropTypes.func.isRequired,
    runTest: PropTypes.func.isRequired,
    updateUserData: PropTypes.func.isRequired
}