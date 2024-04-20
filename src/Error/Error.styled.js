import styled from 'styled-components'

export const StyledError = styled.section`
    background-image: url(/assets/tiles.png);
    background-size: repeat;
    position: absolute;
    width: 100vw;
    height: 100vh;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 20px;
    }

    canvas {
        background-color: rgb(175, 205, 165);
        margin-bottom: 20px;
    }

    @media screen and (max-width: 767px) {
        canvas {
            width: 90%;
        }
    }
`