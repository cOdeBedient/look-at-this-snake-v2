import './LandingPage.css'
import LevelForm from '../LevelForm/LevelForm'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <main>
            <h1>No Snake Zones</h1>
            <LevelForm />
            <Link to='/game'>
                <p>breathe. . . then click to begin</p>
            </Link>
        </main>
    )
}