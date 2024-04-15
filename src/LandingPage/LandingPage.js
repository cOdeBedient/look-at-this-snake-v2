import './LandingPage.css'
import LevelForm from '../LevelForm/LevelForm'

export default function LandingPage({ filterSnakes }) {

    return (
        <div className="landing">
            <h1>No Snake Zones</h1>
            <LevelForm filterSnakes={filterSnakes} />
        </div>
    )
}