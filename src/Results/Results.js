import { Link } from 'react-router-dom'
import { StyledResults } from './Results.styled'
import PropTypes from 'prop-types'
import Header from '../Header/Header'

export default function Results({userData, currentLevel, resetUserData}) {
    console.log('userData', userData)
    let retrievedUserData
    let retrievedLevel
    
    console.log("ss", sessionStorage.getItem("STORED_USER_DATA"))

    if (!sessionStorage.getItem("STORED_USER_DATA")) {
        sessionStorage.setItem("STORED_USER_DATA", JSON.stringify(userData))
        sessionStorage.setItem("STORED_LEVEL", JSON.stringify(currentLevel))
        retrievedUserData = userData
        retrievedLevel = currentLevel
    } else {
        retrievedUserData = (JSON.parse(sessionStorage.getItem("STORED_USER_DATA")))
        retrievedLevel = (JSON.parse(sessionStorage.getItem("STORED_LEVEL")))
    }

console.log('retrievedLevel', retrievedLevel)

    const stressTotals = retrievedUserData[retrievedLevel].reduce((acc, snake) => {
        acc.beforeAvg += snake.beforeTotal/10
        acc.afterAvg += snake.afterTotal/10

        return acc
    }, {beforeAvg: 0, afterAvg: 0})

    let snakeFear
    if (stressTotals.beforeAvg < 3) {
        snakeFear = "minimal"
    } else if (stressTotals.beforeAvg < 7) {
        snakeFear = "moderate"
    } else {
        snakeFear = "high"
    }

    let fortunateness
    let benefit
    let difference = stressTotals.beforeAvg - stressTotals.afterAvg
    if (difference < 3) {
        fortunateness = "Unfortunately"
        benefit = "not very beneficial to you. But you can always try again!"
    } else if (difference < 6) {
        fortunateness = "Fortunately"
        benefit = "very beneficial to you."
    } else {
        fortunateness = "Fortunately"
        benefit = "extremely beneficial to you! LATSTLATP will be celebrated by science for years to come!"
    }

    let spacedString = retrievedLevel.split('l')
    let levelString = `${spacedString[0]}l ${spacedString[1]}`


    function resetStorage() {
        sessionStorage.removeItem("STORED_USER_DATA")
        sessionStorage.removeItem("STORED_LEVEL")
    }

    return (
        <>
            <Header />
            <StyledResults>
                <div className="results-container">
                    <img className="box-pic" src='/assets/doodle-no-background.png' alt="cute puppy" />
                    <div className="results">
                        <h4>Hooray! You completed {levelString.toLowerCase()}!</h4>
                        <h4>Before we started, you had a {snakeFear} level of ophidiophobia (snake fear!).</h4>
                        <h4>{fortunateness}, this treatment was {benefit}</h4>
                        <h4>Would you like to continue with more processing?</h4>
                        <Link to='/'>
                            <button className="back-button" onClick={resetStorage}>return to homepage</button>
                        </Link>
                        {/* <h4>Or just give up and start researching snakeless regions to move to?</h4> */}
                    </div>
                </div>
            </StyledResults>
        </>
    )
}

Results.propTypes = {
    userData: PropTypes.shape({
        Level1: PropTypes.array.isRequired,
        Level2: PropTypes.array.isRequired,
        Level3: PropTypes.array.isRequired,
        Level4: PropTypes.array.isRequired
    }).isRequired,
    currentLevel: PropTypes.string.isRequired, 
}