import './Game.css'
import SnakeDisplay from '../SnakeDisplay/SnakeDisplay'
import { useState, useEffect } from 'react'


export default function Game({ currentSnakes, updateUserData, userData, computeFinalAnalysis, currentLevel }) {

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
                        computeFinalAnalysis={computeFinalAnalysis}
                        userData={userData}
                        currentLevel={currentLevel} />
                </div>
            </main>
        </>
    )
}