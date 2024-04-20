import { StyledLevelForm } from './LevelForm.styled'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function LevelForm( { filterSnakes }) {
    const [formSelector, setFormSelector] = useState('1')


    function handleChange(event) {
        setFormSelector(event.target.id)
    }

    function handleClick() {
        filterSnakes(formSelector)
    }

    return (
        <StyledLevelForm>
            <div>
                <label>
                    <input name="level" type="radio" id="1" onChange={event => handleChange(event)} tabIndex='1' checked={formSelector === "1" ? true : false}></input>Level 1 
                </label>
                <label>
                    <input name="level" type="radio" id="2" onChange={event => handleChange(event)} tabIndex='2' checked={formSelector === "2" ? true : false}></input>Level 2 
                </label>
                <label>
                    <input name="level" type="radio" id="3" onChange={event => handleChange(event)} tabIndex='3' checked={formSelector === "3" ? true : false}></input>Level 3 
                </label>
                <label id="last-label">
                    <input name="level" type="radio" id="4" onChange={event => handleChange(event)} tabIndex='4' checked={formSelector === "4" ? true : false}></input>Level 4 
                </label>
            </div>
            <Link to='/game' onClick={handleClick}>
                <p>click here to begin</p>
            </Link>
        </StyledLevelForm>
    )
}

LevelForm.propTypes = {
    filterSnakes: PropTypes.func.isRequired
}