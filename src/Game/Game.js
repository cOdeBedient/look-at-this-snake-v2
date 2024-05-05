import { StyledGame } from './Game.styled'
import SnakeDisplay from '../SnakeDisplay/SnakeDisplay'
import Header from '../Header/Header'

export default function Game({ snakes, currentLevel, userData, updateUserData, resetUserData }) {

    return (
        <>  
            <StyledGame>
            <Header />
                <main>
                    <div>
                        <SnakeDisplay snakes={snakes} currentLevel={currentLevel} userData={userData} updateUserData={updateUserData} resetUserData={resetUserData} />
                    </div>
                </main>
            </StyledGame>
        </>
    )
}