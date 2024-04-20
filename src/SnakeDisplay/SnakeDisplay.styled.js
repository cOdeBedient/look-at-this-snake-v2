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

    .snake-and-counter {
        display: flex;
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


    @media screen and (max-width: 1024px) {
        img {
            height: 300px;
            width: 450px;
            padding: 10px;
        }

        .start-box {
            height: 300px;
            width: 450px;
            padding: 10px;
        }

        .snake-display {
            margin-top: 55px;
        }

        .snake-photos-container {
        display: flex;
        width: 650px;
        }
    }

    @media screen and (max-width: 767px) {
        .snake-photos-container {
            flex-direction: column;
            width: 100%;
        }

        img {
            width: 75vw;
            height: 80%;
            padding: 10px;
        }

        .start-box {
            width: 80vw;
            height: 80%;
            background-size: 35%;
        }
    }
`