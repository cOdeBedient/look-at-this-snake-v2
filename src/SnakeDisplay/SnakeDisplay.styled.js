import styled from 'styled-components'

export const StyledSnakeDisplay = styled.div`
 font-family: "Rubik Bubbles", system-ui;
  font-weight: 400;
  

    .snake-title {
        /* margin-top: 70px; */
        background-color: red;
        color: white;
        height: 1.6em;
        padding-left: 9px;
        padding-right: 8px;
        border-radius: 10px;
        padding-top: 3px;
        /* border: 6px solid red; */
        margin-bottom: 10px;
        font-size: 1.3em;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }

    .box-pic {
        height: 400px;
        width: 600px;
        object-fit: cover;
        padding: 10px;
        /* border: 2px solid black; */
        background-color: red;
        border-radius: 10px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }

    .dog-head {
        height: 200px;
        width: 200px;
        position: absolute;
    }

    .start-box {
        height: 400px;
        width: 600px;
        padding: 10px;
        /* border: 2px solid black; */
        background-color: red;
        background-image: url(/assets/snake-dog.png);
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 10px;
        filter: invert(0%);
        cursor: pointer;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
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
        .box-pic {
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
        /* align-items: center; */
        width: 650px;
        }
    }

    @media screen and (max-width: 767px) {
        .snake-photos-container {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .box-pic {
            width: 75vw;
            height: 45vw;
            padding: 10px;
        }

        .start-box {
            width: 75vw;
            height: 45vw;
            background-size: 35%;
        }

        p {
            text-align: center;
            margin-right: 0 !important;
            padding-right: 10px;
            padding-left: 10px;
        }
    }
`