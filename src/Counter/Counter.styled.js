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
            margin: 6.5px 0;
        }
    }

    @media screen and (max-width: 767px) {
        p {
            font-size: .8em;
            margin-top: 6px !important;
        }
    }

    @media screen and (max-width: 450px) {
        p {
            margin-top: 1px !important;
        }

    }
`