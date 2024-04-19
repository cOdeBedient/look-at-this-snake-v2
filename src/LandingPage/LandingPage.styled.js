import styled from 'styled-components'

export const StyledLandingPage = styled.div`
    height: 100vh;
    background-image: url(/assets/puppy-wide-blue-background.jpg);
    /* background-image: url(/assets/snake-dog.png); */
    /* background-size: 15%; */
    background-size: cover;
    position: absolute;
    width: 100vw;
  
    h1 {
      color: white;
      margin-left: 100px;
      margin-top: 200px;
      margin-bottom: 5px;
      padding-top: 15px;
      border-top: 1px solid white;
      width: fit-content;
    }

    h2 {
      font-size: 1.15em;
      font-style: italic;
      margin-left: 100px;
      margin-top: 0;
      margin-bottom: 30px;
      width: fit-content;
      padding-bottom: 15px;
      border-bottom: 1px solid white;
    }

    a {
      text-decoration: none;
    }

    p {
      color: black;
      background-color: white;
      width: fit-content;
      margin-top: 30px;
      padding: 4px 8px 4px 8px;
      border-radius: 4px;
    }
`