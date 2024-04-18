import './Game.css'
import SnakeDisplay from '../SnakeDisplay/SnakeDisplay'
import { useState, useEffect } from 'react'


export default function Game({ currentSnakes, updateUserData, userData, currentLevel, resetData }) {

    console.log("currentLevel", currentLevel)

    return (
        <>
            <header>
                <h2 className="mainpage-header">LATSTLATP</h2>
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