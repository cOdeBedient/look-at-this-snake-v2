import styled from 'styled-components'

export const StyledLandingPage = styled.div`
    height: 100vh;
    /* background-image: url(/assets/puppy-wide-blue-background.jpg); */
    /* background-size: 15%; */
    position: absolute;
    width: 100vw;
  
    ::before {
      content: "";
      position: absolute;
      top: 20px;
      left: 0;
      width: 100%;
      height:100%;
      z-index: -1;
      background-color: grey;
      background-image: url(/assets/snake-dog.png);
      opacity: .03;
      background-size: 55%;
      background-repeat: no-repeat;
      background-position: center;
    }

    section {
      background-color: rgb(255, 255, 255, .55);
      padding: 10px 10px 10px 10px;
      margin-top: 150px;
      width: fit-content;
      margin-left: 100px;
      margin-left: 100px;
    }

    h2 {
      font-size: 2em;
      margin-bottom: 10px;
      margin-top: 0;
      width: fit-content;
    }

    h3 {
      font-size: 1.15em;
      font-style: italic;
      margin-top: 0;
      margin-bottom: 20px;
      width: fit-content;
      padding-bottom: 10px;
      padding-top: 10px;
      border-bottom: 1px solid black;
      border-top: 1px solid black;
    }

    a {
      text-decoration: none;
    }

    p {
      color: black;
      background-color: lightgrey;
      border: 2px solid black;
      width: fit-content;
      margin-top: 30px;
      padding: 4px 8px 4px 8px;
      /* border-radius: 4px; */
    }
`