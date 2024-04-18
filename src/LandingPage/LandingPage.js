import './LandingPage.css'
import LevelForm from '../LevelForm/LevelForm'

export default function LandingPage({ filterSnakes }) {

    return (
        <div className="landing">
            <h1>Look at this Snake then Look at this Puppy</h1>
            <h2>A phobic deprogramming tool designed by someone with no credentials</h2>
            <LevelForm filterSnakes={filterSnakes} />
        </div>
    )
}