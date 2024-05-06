import styled from 'styled-components'

export const StyledGame = styled.div`
    width: 100vw;
    height: 100vh;
    

    .game-title {
        color: black;
    }

    main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(/assets/snake-skin-background.jpg);
        background-size: repeat;
        /* background-image: url(/assets/snake-dog.png);
        background-size: 2%; */
    }
`