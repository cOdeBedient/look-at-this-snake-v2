import "./EvaluationForm.css"
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function EvaluationForm({ advanceSnake, runTest, snakeHidden, displayedSnake, updateUserData }) {
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
        setTimeout(() => {setTestHasRun(true)}, 3200)
    }

    function handleNextSnakeClick(event) {
        event.preventDefault()
        updateUserData(displayedSnake, evalFormData)
        moveToNextSnake()
    }

    function moveToNextSnake() {
        advanceSnake()
        setTestHasRun(false)
        setEvalFormData({before: 0, after: 0})
    }

    return (
        snakeHidden === '' &&
        <form className='evaluation-form'>
            {testHasRun ?
                <>
                    <label>Updated Anxiety Level (out of 10)
                        <input type="number" name="after" min="0" max="10" value={evalFormData.after} onChange={event => handleChange(event)} />
                    </label>
                    <button onClick={event => handleNextSnakeClick(event)}>I'm ready to see the next snake</button>
                </>
                :
                <>
                    <label>Starting Anxiety Level (out of 10)
                        <input type="number" name="before" min="0" max="10" value={evalFormData.before} onChange={event => handleChange(event)} />
                    </label>
                    <button onClick={event => handleRunTestClick(event)}>initiate processing</button>
                </>
            }
        </form>
    )
}

EvaluationForm.propTypes = {
    displayedSnake: PropTypes.shape({
        name: PropTypes.string,
        isVenmous: PropTypes.bool,
        isAggressive: PropTypes.bool,
        image: PropTypes.object,
        isFavorite: PropTypes.bool
    }).isRequired,
    snakeHidden: PropTypes.string.isRequired,
    advanceSnake: PropTypes.func.isRequired,
    runTest: PropTypes.func.isRequired,
    updateUserData: PropTypes.func.isRequired
}