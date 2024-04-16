import './LandingPage.css'
import LevelForm from '../LevelForm/LevelForm'

export default function LandingPage({ filterSnakes }) {

    return (
        <div className="landing">
            <h1>Look at this Snake</h1>
            <h3>An emotional coping tool designed by someone with no credentials</h3>
            <LevelForm filterSnakes={filterSnakes} />
        </div>
    )
}