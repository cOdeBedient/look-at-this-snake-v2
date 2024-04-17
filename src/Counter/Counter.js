import './Counter.css'

export default function Counter({ currentSnakes, snakeCounter }) {
    const snakesLeft = currentSnakes.length - snakeCounter - 1
    const snakeBoxes = currentSnakes.reduce((acc, snake, index) => {
        if (index <= snakesLeft) {
            let text
            if (index === snakesLeft) {
                text = `•${index + 1}`
            } else {
                text = index + 1
            }
            acc.push(
            <div className='snake-box-container' >
                <p className="counter">{text}</p>
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