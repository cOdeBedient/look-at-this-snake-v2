import styled from 'styled-components'

export const StyledLandingPage = styled.div`
  height: 100vh;
  /* background-image: url(/assets/puppy-wide-blue-background.jpg); */
  /* background-size: 15%; */
  position: absolute;
  width: 100vw;
  background-image: url(/assets/snake-dog.png);
  background-size: 50%;


  ::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    width: 100vw;
    height:100vh;
    z-index: -1;
    /* background-image: linear-gradient(to left, #434343 0%, white 100%); */
    background-color: lightgrey;
    opacity: .1;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    
  }

  section {
    background-color: rgb(255, 255, 255, .85);
    padding: 10px 10px 10px 10px;
    margin-top: 150px;
    width: fit-content;
    margin-left: 80px;
    border-radius: 10px;
  }

  h2 {
    font-size: 1.95em;
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
    color: white;
    background-color: black;
    border: 2px solid black;
    width: fit-content;
    /* margin-top: 30px; */
    padding: 4px 8px 4px 8px;
    border-radius: 4px;
  }

  @media screen and (max-width: 1024px) {
    section {
      margin-top: 100px;
      margin-left: 50px;
    }

    h2 {
      font-size: 1.65em;
      margin-bottom: 10px;
    }

    h3 {
      font-size: .95em;
      margin-bottom: 20px;
      padding-bottom: 10px;
      padding-top: 10px;
    }
}

  @media screen and (max-width: 767px) {
    section {
      margin-top: 50px;
      margin-left: 10px;
      margin-right: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      font-size: 1.2em;
      margin-bottom: 10px;
    }

    h3 {
      font-size: .95em;
      margin-bottom: 20px;
      padding-bottom: 5px;
      padding-top: 5px;
    }
}
`