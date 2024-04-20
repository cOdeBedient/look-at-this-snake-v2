import styled from 'styled-components'

export const StyledHeader = styled.header`     
    background-color: black;
    padding: 1px 0px 1px 10px;
    color: white;
    display: flex;
    align-items: center;

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
            margin: 8px 5px 1px 20px;
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