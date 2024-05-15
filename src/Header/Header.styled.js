import styled from 'styled-components'

export const StyledHeader = styled.header`     
    background-color: red;
    padding: 1px 0px 1px 10px;
    color: white;
    display: flex;
    align-items: center;
    font-family: "Kablammo", system-ui;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
      "MORF" 0;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

    h1 {
        margin: 7px 0px 7px 0px;
    }

    img {
        height: 30px;
        width: 31px;
        filter: invert(100%);
        margin: 5px 10px 5px 20px;
    }

    @media screen and (max-width: 1024px) {
        padding-left: 5px;

        h1 {
            font-size: 1.5em;
            margin-top: 8px
        }

        img {
            height: 27px;
            width: 28px;
            margin: 8px 5px 8px 20px;
        }
    }

    @media screen and (max-width: 767px) {
        padding-left: 0px;

        h1 {
            font-size: 1.3em;
        }

        img {
            height: 24px;
            width: 25px;
            margin: 3px 5px 3px 20px;
        }
    }
`