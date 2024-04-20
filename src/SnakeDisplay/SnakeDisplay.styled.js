import styled from 'styled-components'

export const StyledSnakeDisplay = styled.div`
    h2 {
        margin-top: 70px;
    }

    img {
        height: 400px;
        width: 600px;
        object-fit: cover;
        padding: 10px;
        border: 2px solid black;
        background-color: light grey;
    }

    .start-box {
        height: 400px;
        width: 600px;
        padding: 10px;
        border: 2px solid black;
        background-color: grey;
        background-image: url(/assets/snake-dog.png);
        background-size: 35%;
        background-repeat: no-repeat;
        background-position: center;
        filter: invert(25%);
    }

    .snake-display {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 75px;
    }

    .snake-photos-container {
        display: flex;
        width: 800px;
    }

    button {
        margin-top: 15px;
        color: white;
        background-color: black;
    }

    .snake-title {
        margin-right: 100px;
    }

    .hidden {
        display: none;
    }
`