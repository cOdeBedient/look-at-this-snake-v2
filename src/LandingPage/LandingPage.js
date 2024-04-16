import './LandingPage.css'
import LevelForm from '../LevelForm/LevelForm'

export default function LandingPage({ filterSnakes }) {

    return (
        <div className="landing">
            <h1>Look at this Snake Then Look at This Puppy</h1>
            <h3>An phobic deprogramming tool designed by someone with no credentials</h3>
            <LevelForm filterSnakes={filterSnakes} />
        </div>
    )
}