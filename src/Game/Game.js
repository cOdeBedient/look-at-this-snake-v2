import './Game.css'
import SnakeDisplay from '../SnakeDisplay/SnakeDisplay'
import { useState, useEffect } from 'react'


export default function Game({ currentSnakes }) {

    return (
        <main>
            <div>
                <SnakeDisplay currentSnakes={currentSnakes}/>
                {/* <RatingBar /> */}
            </div>
        </main>
    )
}