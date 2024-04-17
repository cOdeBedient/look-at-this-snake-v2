import "./EvaluationForm.css"
import { useState } from 'react'

export default function EvaluationForm({ advanceSnake, runTest }) {
    const [ evalFormData, setEvalFormData] = useState({before: 0, after: 0})
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
        console.log('made it in here')
        event.preventDefault()
        runTest()
        setTimeout(() => {setTestHasRun(true)}, 3200)
    }

    function handleNextSnakeClick(event) {
        event.preventDefault()
        moveToNextSnake()
    }

    function moveToNextSnake() {
        advanceSnake()
        setTestHasRun(false)
        setEvalFormData({before: 0, after: 0})
    }


    return (
        <form className='evaluation-form'>
            <label>Starting Anxitey Level (out of 10)
                <input type="number" name="before" min="0" max="10" value={evalFormData.before} onChange={event => handleChange(event)} />
            </label>
            <button onClick={event => handleRunTestClick(event)}>run test</button>
            {testHasRun &&
            <>
                <label>Updated Anxitey Level (out of 10)
                    <input type="number" name="after" min="0" max="10" value={evalFormData.after} onChange={event => handleChange(event)} />
                </label>
                <button onClick={event => handleNextSnakeClick(event)}>I'm ready to see the next snake</button>
            </>}
        </form>
    )
}