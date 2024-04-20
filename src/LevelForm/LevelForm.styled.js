import styled from 'styled-components'

export const StyledLevelForm = styled.section`
        color: black;
        background-color: transparent !important;
        margin-top: 0 !important;
        margin-left: 0 !important;
        padding-left: 0 !important;
        display: flex;
        align-items: center;

        p {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 75px;
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
`