import styled from 'styled-components'

export const StyledResults = styled.section`
    height: 100vh;
    width: 100vw;
    background-image: url(/assets/tiles.png);
    background-size: repeat;
    position: absolute;
    
    div {
        background-color: rgb(255, 255, 255, .2);
        padding: 10px 10px 10px 10px;
        margin-top: 100px;
        width: 800px;
        margin-left: 80px;
    }

    a {
      text-decoration: none;
    }

    .back-button {
        background: black;
        width: fit-content;
        color: white;
        padding: 3px 5px 3px 5px;
    }

    @media screen and (max-width: 950px) {
        div {
            width: 75vw;
            margin-top: 80px;
        }
    }

    @media screen and (max-width: 470px) {
        div {
            width: 75vw;
            margin-left: 20px;
            margin-top: 60px;
        }
    }
`