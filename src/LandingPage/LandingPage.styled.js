import styled from 'styled-components'

export const StyledLandingPage = styled.div`
  height: 100vh;
  /* background-image: url(/assets/puppy-wide-blue-background.jpg); */
  /* background-size: cover; */
  position: absolute;
  width: 100vw;
  background-image: url(/assets/snake-skin-background.jpg);
  /* background-size: 10%; */
  font-family: "Anybody", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  text-align: center;

  ::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    width: 100vw;
    height:100vh;
    z-index: -1;
    /* background-image: linear-gradient(to left, #434343 0%, white 100%); */
    /* background-color: red; */
    /* opacity: .1; */
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    
  }

  section {
    background-color: red;
    /* border: 5px solid yellow; */
    padding: 10px 10px 10px 10px;
    margin-top: 150px;
    width: 500px;
    margin-left: 80px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  h2 {
    font-family: "Kablammo", system-ui;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
      "MORF" 0;
    font-size: 1.95em;
    margin-bottom: 10px;
    margin-top: 0;
    width: fit-content;
    color: white;
  }

  h3 {
    font-size: 1.35em;
    font-style: italic;
    margin-top: 0;
    margin-bottom: 0;
    width: fit-content;
    padding-bottom: 10px;
    padding-top: 10px;
    /* border-bottom: 3px solid white;
    border-top: 3px solid white; */
    color: yellow;
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