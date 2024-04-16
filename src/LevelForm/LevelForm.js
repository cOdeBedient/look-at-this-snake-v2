import './LevelForm.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LevelForm( { filterSnakes }) {
    const [formSelector, setFormSelector] = useState('1')


    function handleChange(event) {
        setFormSelector(event.target.id)
    }

    function handleClick() {
        filterSnakes(formSelector)
    }

    return (
        <section className="level-form">
            <label>
                <input name="level" type="radio" id="1" onChange={event => handleChange(event)} checked={formSelector === "1" ? true : false}></input>Level 1 | 
            </label>
            <label>
                <input name="level" type="radio" id="2" onChange={event => handleChange(event)} checked={formSelector === "2" ? true : false}></input>Level 2 | 
            </label>
            <label>
                <input name="level" type="radio" id="3" onChange={event => handleChange(event)} checked={formSelector === "3" ? true : false}></input>Level 3 | 
            </label>
            <label>
                <input name="level" type="radio" id="4" onChange={event => handleChange(event)} checked={formSelector === "4" ? true : false}></input>Level 4 | 
            </label>
            <Link to='/game' onClick={handleClick}>
                <p>breathe. . . then click this button to begin</p>
            </Link>
        </section>
    )
}