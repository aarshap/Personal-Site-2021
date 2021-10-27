import styled from "styled-components"

export const Wrapper = styled.div`
    margin: 80px auto;

    @media (min-width: 800px) {
        float: ${props => props.float ? "right" : "none" };
    }

`

export const Caption = styled.h4`

`