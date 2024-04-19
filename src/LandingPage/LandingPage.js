import { StyledLandingPage } from './LandingPage.styled'
import LevelForm from '../LevelForm/LevelForm'
import Header from '../Header/Header'

export default function LandingPage({ filterSnakes }) {

    return (
        <>
            
            <StyledLandingPage>
                <Header />
                <section>
                    <h2>Look at this Snake then Look at this Puppy</h2>
                    <h3>A phobic deprogramming tool designed by someone with no credentials</h3>
                    <LevelForm filterSnakes={filterSnakes} />
                </section>
            </StyledLandingPage>
        </>
    )
}