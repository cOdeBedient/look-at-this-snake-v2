import styled from 'styled-components'

export const StyledEvaluationForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    width: 150px;
    text-align: center;
    

    .eval-form {
        margin-top: 30px;
        background-color: red;
        border-radius: 10px;
        padding: 10px;
        width: 100%;
        border: 8px solid red;
        color: white;
    }

    label {
        font-size: 1.15em;
    }

    input {
        margin-top: 10px;
        width: 130px;
        text-align: center;
        border: none;
        background-color: white;
        color: black;
    }

    button {
        border: none;
        padding: 3px 7px;
        border-radius: 4px;
        font-family: "Rubik Bubbles", system-ui;
        font-weight: 400;
        font-size: 1.05em;
    }

    @media screen and (max-width: 1024px) {
        .eval-form {
        margin-top: 30px;
    }
    }

    @media screen and (max-width: 767px) {
        flex-direction: row;
        width: 80%;

        .eval-form {
            display: flex;
            flex-direction: column;
            width: 45%;
            margin: 10px;
        }

        input {
            width: 90%;
        }

        label {
        margin-top: 0;
        }
    }
`