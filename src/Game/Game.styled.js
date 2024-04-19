import styled from 'styled-components'

export const StyledGame = styled.div`
    .game-title {
        color: black;
    }

    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(/assets/tiles.png);
        background-size: repeat;
    }

    header {
        background-color: black;
        padding: 10px 0px 10px 10px;
    }

    .mainpage-header {
        color: white;
        margin: 10px 0 10px 15px;
        font-size: 1.25em;
        border: none;
        padding: 0;
    }
`