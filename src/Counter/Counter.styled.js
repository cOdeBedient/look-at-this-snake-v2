import styled from 'styled-components'

export const StyledCounter = styled.div`
        display: flex;
        flex-direction: column;
        margin-right: 15px;
        align-items: end;
        width: 15px;

    p {
        margin: 11px 0;
    }

    @media screen and (max-width: 1024px) {
        p {
            margin: 5.5px 0;
        }
    }

    @media screen and (max-width: 767px) {
        p {
            font-size: .8em;
            margin-top: 3px !important;
            margin-bottom: 3px;
            padding-right: 5px;
        }
    }

    @media screen and (max-width: 450px) {
        p {
            margin-top: 0px !important;
            margin-bottom: 1px;
            padding-right: 2px;
        }

    }
`