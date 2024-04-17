import './Game.css'
import SnakeDisplay from '../SnakeDisplay/SnakeDisplay'
import { useState, useEffect } from 'react'


export default function Game({ currentSnakes, updateUserData }) {

    return (
        <main>
            <div>
                <SnakeDisplay currentSnakes={currentSnakes} updateUserData={updateUserData}/>
                {/* <RatingBar /> */}
            </div>
        </main>
    )
}