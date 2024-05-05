import { StyledGame } from './Game.styled'
import SnakeDisplay from '../SnakeDisplay/SnakeDisplay'
import Header from '../Header/Header'

export default function Game({ snakes, currentLevel }) {

    return (
        <>  
            <StyledGame>
            <Header />
                <main>
                    <div>
                        <SnakeDisplay snakes={snakes} currentLevel={currentLevel} />
                    </div>
                </main>
            </StyledGame>
        </>
    )
}