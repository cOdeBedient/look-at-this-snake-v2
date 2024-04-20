import { StyledGame } from './Game.styled'
import SnakeDisplay from '../SnakeDisplay/SnakeDisplay'
import Header from '../Header/Header'
import PropTypes from 'prop-types'


export default function Game({ currentSnakes, updateUserData, userData, currentLevel, resetData }) {

    return (
        <>  
            <StyledGame>
            <Header />
                <main>
                    <div>
                        <SnakeDisplay
                            currentSnakes={currentSnakes}
                            updateUserData={updateUserData}
                            userData={userData}
                            currentLevel={currentLevel}
                            resetData={resetData} />
                    </div>
                </main>
            </StyledGame>
        </>
    )
}