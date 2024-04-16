import './Counter.css'

export default function Counter({ currentSnakes, snakeCounter }) {
    const snakesLeft = currentSnakes.length - snakeCounter
    const snakeBoxes = currentSnakes.reduce((acc, snake, index) => {
        if (index <= snakesLeft) {
            acc.push(<div className='snake-box'></div>)
        }

        return acc;
    }, [])

    return (
        <>
            {snakeBoxes}
        </>
    )
}