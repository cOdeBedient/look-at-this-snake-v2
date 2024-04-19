import { StyledCounter } from './Counter.styled'

export default function Counter({ currentSnakes, snakeCounter }) {
    const snakesLeft = currentSnakes.length - snakeCounter - 1
    const snakeBoxes = currentSnakes.reduce((acc, snake, index) => {
        if (index <= snakesLeft) {
            let text
            if (index === snakesLeft) {
                text = `••${index + 1}`
            } else {
                text = index + 1
            }
            acc.push(
            <div>
                <p>{text}</p>
            </div>)
        }

        return acc;
    }, [])

    return (
        <StyledCounter>
            {snakeBoxes}
        </StyledCounter>
    )
}