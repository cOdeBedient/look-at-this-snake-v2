import { StyledLandingPage } from './LandingPage.styled'
import LevelForm from '../LevelForm/LevelForm'
import Header from '../Header/Header'

export default function LandingPage({getLevel}) {

    return (
        <>
            <StyledLandingPage>
                <Header />
                <div className="landing-container">
                    <section>
                        <h2>Look at This Snake Then Look at This Puppy</h2>
                        <h3>Just imagine puppies!!!</h3>
                        <LevelForm getLevel={getLevel} />
                    </section>
                    <div className="puppy-bio-container">
                        <img src='/assets/cute-doodle-crop.jpg' alt="cute puppy" />
                        <p className="puppy-bio">Look at Claude. He will help you feel less scared of snakes.</p>
                    </div>
                </div>
            </StyledLandingPage>
        </>
    )
}