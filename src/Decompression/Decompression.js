export default function({userData, computeFinalAnalysis, currentLevel}) {

    console.log("userData", userData)
    console.log("userData[currentLevel]", userData[currentLevel])
    console.log("currentLevel", currentLevel)

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
        benefit = "not very beneficial to you."
    } else if (difference < 6) {
        fortunateness = "Fortunately"
        benefit = "very beneficial to you."
    } else {
        fortunateness = "Fortunately"
        benefit = "extremely beneficial to you! We will be celebrated by science for years to come!"
    }


    return (
        <>
            <h4>You completed level {currentLevel}</h4>
            <h4>Your compiled pre-treatment fear totals indicate a {snakeFear} level of ophidiophobia</h4>
            <h4>{fortunateness}, this treatment was {benefit}</h4>
            <h4>Would you like to proceed to the next level? Or just give up and start researching snakeless regions to move to?</h4>
        </>

    )
}

// userData at end 
// Object
// Level1
// : 
// Array(10)
// 0
// {snake: 'Corn Snake', stressBefore: 0, stressAfter: 0}
// 1
// {snake: 'Ball Python', stressBefore: '4', stressAfter: '2'}
// 2
// {snake: 'Milk Snake', stressBefore: '5', stressAfter: '2'}
// 3
// {snake: 'Rat Snake', stressBefore: '8', stressAfter: '1'}
// 4
// {snake: 'Gopher Snake', stressBefore: '6', stressAfter: '5'}
// 5
// {snake: 'Blue Racer', stressBefore: '9', stressAfter: '9'}
// 6
// {snake: 'Coachwhip Snake', stressBefore: '5', stressAfter: '3'}
// 7
// {snake: 'Cape Gopher Snake', stressBefore: '6', stressAfter: '2'}
// 8
// {snake: 'Longnose Snake', stressBefore: '8', stressAfter: '3'}
// 9
// {snake: 'Plains Hognose Snake', stressBefore: '5', stressAfter: '2'}
// length
// : 
// 10
// [[Prototype]]
// : 
// Array(0)
// Level2
// : 
// []
// Level3
// : 
// []
// Level4
// : 
// []