import styled from 'styled-components'

export const StyledEvaluationForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    width: 150px;
    text-align: center;

    label {
        margin-top: 60px;
    }

    input {
        margin-top: 10px;
        width: 140px;
        text-align: center;
    }

    @media screen and (max-width: 1024px) {
        
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