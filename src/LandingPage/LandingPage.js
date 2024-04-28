import { StyledLandingPage } from './LandingPage.styled'
import LevelForm from '../LevelForm/LevelForm'
import Header from '../Header/Header'

export default function LandingPage({ filterSnakes }) {

    return (
        <>
            <StyledLandingPage>
                <Header />
                <section>
                    <h2>Look at This Snake Then Look at This Puppy</h2>
                    <h3>Can you just imagine puppies!!!</h3>
                    <LevelForm filterSnakes={filterSnakes} />
                </section>
            </StyledLandingPage>
        </>
    )
}