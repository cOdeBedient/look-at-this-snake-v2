import styled from 'styled-components'

export const StyledLevelForm = styled.section`
    color: black;
    margin-top: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    display: flex;
    align-items: center;
    width: 100% !important;
    flex-direction: column;
    margin-right: 0 !important;
    border: none !important;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.0) !important;
    


    div {
        padding: 10px 10px 10px 10px;
        background-color: yellow !important;
        display: flex;
        justify-content: space-evenly;
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }

    p {
        margin: 0;
        margin-top: 25px;
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }

    :hover {
        cursor: pointer;
    }

    label {
        display: flex;
        padding-right: 15px;
        border-right: 1px solid black;
        margin-left: 15px;
        font-weight: 500;
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