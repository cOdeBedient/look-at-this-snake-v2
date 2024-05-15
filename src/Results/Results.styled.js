import styled from 'styled-components'

export const StyledResults = styled.section`
    height: 100vh;
    width: 100vw;
    background-image: url(/assets/snake-skin-background.jpg);
    position: absolute;
    font-family: "Rubik Bubbles", system-ui;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    
.results-container {
    display: flex;
    align-items: center;
    margin-top: 10vh;
}

    .results {
        background-color: rgb(255, 255, 255, .8);
        border-radius: 20px;
        padding: 10px 10px 10px 10px;
        width: 35vw;
        border: 5px solid red;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }

    button {
        border: none;
        padding: 3px 7px;
        border-radius: 4px;
        font-family: "Rubik Bubbles", system-ui;
        font-weight: 400;
        font-size: 1.05em;
        cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    h4 {
        font-weight: 100;
        font-size: 1.2em;
        margin-top: 10px;
    }

    .back-button {
        background: black;
        width: fit-content;
        color: white;
        padding: 3px 5px 3px 5px;
    }

    img {
        height: 40vh;
        margin-right: 3vw;
        margin-left: -10vw;
    }

    @media screen and (max-width: 950px) {
        .results {
            width: 50vw;
            margin-top: 80px;
        }

        img {
            margin-left: -15vw;
            height: 35vh;
        }
    }

    @media screen and (max-width: 750px) {
        img{
                display: none;
            }
        }

    @media screen and (max-width: 470px) {
        div {
            width: 75vw;
            margin-left: 20px;
            margin-top: 60px;
        }

        img{
            display: none;
        }
    }
`