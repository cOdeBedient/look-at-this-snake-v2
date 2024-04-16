import "./EvaluationForm.css"
import { useState } from 'react'

export default function EvaluationForm() {
    const [ evalFormData, setEvalFormData] = useState({before: 0, after: 0})


    return (
        <form className='evaluation-form'>
            <label>
                <input type="number" name="before" value={evalFormData.before} />Starting Anxitey Level (out of 10)
            </label>
            <label>
                <input type="number" name="after" value={evalFormData.after} />Updated Anxitey Level (out of 10)
            </label>
        </form>
    )
}