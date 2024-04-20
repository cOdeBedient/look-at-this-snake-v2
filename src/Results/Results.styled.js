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
        margin-top: 150px;
        width: fit-content;
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
`