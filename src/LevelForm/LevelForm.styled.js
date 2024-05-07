import styled from 'styled-components'

export const StyledLevelForm = styled.section`
    color: black;
    margin-top: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding: 0 !important;
    display: flex;
    align-items: center;
    width: 100% !important;
    flex-direction: column;
    border: none !important;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.0) !important;
    
    div {
        padding: 10px 10px 10px 10px;  
        /* display: flex; */
        justify-content: space-evenly;
        width: 100%;
        padding-top: 0;
    }

    button {
        margin: 0;
        margin-bottom: 10px;
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        padding: 5px 10px 5px 10px;
        border: none;
        font-weight: bolder;
        font-style: italic;
        font-size: 15px;
        background-color: white;
    }

    :hover {
        cursor: pointer;
    }

    label {
        display: flex;
        align-items: center;
        padding: 10px 15px 10px 15px;
        /* border-right: 1px solid black; */
        margin: 10px;
        font-weight: 500;
        background-color: yellow !important;
        border-radius: 15px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
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