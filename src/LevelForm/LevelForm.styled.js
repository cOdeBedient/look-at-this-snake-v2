import styled from 'styled-components'

export const StyledLevelForm = styled.section`
    color: black;
    background-color: transparent !important;
    margin-top: 0 !important;
    margin-left: 0 !important;
    padding-left: 0 !important;
    display: flex;
    align-items: center;

    div {
        display: flex;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 70px;
    }

    :hover {
        cursor: pointer;
    }

    label {
        display: flex;
        padding-right: 15px;
        border-right: 1px solid black;
        margin-left: 15px;
    }

    #last-label {
        border: none !important;
    }

    @media screen and (max-width: 1024px) {
        label {
            margin-left: 10px;
            padding-right: 10px;
            font-size: .9em;
        }

        p {
            font-size: .9em;
            margin-left: 45px;
        }
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
        width: 100% !important;
        margin-right: 0 !important;

        div {
            justify-content: space-evenly;
        }

        p {
            margin: 0;
            margin-top: 25px;
        }

        label {
            margin-left: 10px;
            padding-right: 10px;
            font-size: .9em;
            display: flex;
            flex-direction: column;
        }
    }
`