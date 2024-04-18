import './Game.css'
import SnakeDisplay from '../SnakeDisplay/SnakeDisplay'
import PropTypes from 'prop-types'


export default function Game({ currentSnakes, updateUserData, userData, currentLevel, resetData }) {

    return (
        <>
            <header>
                <h1 className="mainpage-header">LATSTLATP</h1>
            </header>
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
        </>
    )
}