import { Link } from 'react-router-dom'
import { StyledResults } from './Results.styled'
import PropTypes from 'prop-types'
import Header from '../Header/Header'

export default function Results({userData, currentLevel, resetData}) {
    console.log('currentLevel', currentLevel)

    const stressTotals = userData[currentLevel].reduce((acc, snake) => {
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
        benefit = "not very beneficial to you. Most likely you have misused the test."
    } else if (difference < 6) {
        fortunateness = "Fortunately"
        benefit = "very beneficial to you."
    } else {
        fortunateness = "Fortunately"
        benefit = "extremely beneficial to you! LATSTLATP will be celebrated by science for years to come!"
    }

    let spacedString = currentLevel.split('l')
    let levelString = `${spacedString[0]}l ${spacedString[1]}`


    function handleClick() {
        resetData()
    }

    return (
        <StyledResults>
            <Header />
            <div>
                <h4>You completed {levelString.toLowerCase()}.</h4>
                <h4>Your compiled pre-treatment fear totals indicate a {snakeFear} level of ophidiophobia.</h4>
                <h4>{fortunateness}, this treatment was {benefit}</h4>
                <h4>Would you like to continue with more processing?</h4>
                <Link to='/' onClick={handleClick}>
                    <p className="back-button">return to homepage</p>
                </Link>
                {/* <h4>Or just give up and start researching snakeless regions to move to?</h4> */}
            </div>
        </StyledResults>

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
    resetData: PropTypes.func.isRequired,
    
}