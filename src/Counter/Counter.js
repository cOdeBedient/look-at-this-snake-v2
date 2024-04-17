import './Counter.css'

export default function Counter({ currentSnakes, snakeCounter }) {
    const snakesLeft = currentSnakes.length - snakeCounter - 1
    const snakeBoxes = currentSnakes.reduce((acc, snake, index) => {
        if (index <= snakesLeft) {
            acc.push(
            <div className='snake-box-container' >
                <p className="counter">{index + 1}</p>
            </div>)
        }

        return acc;
    }, [])

    return (
        <div className="boxes">
            {snakeBoxes}
        </div>
    )
}