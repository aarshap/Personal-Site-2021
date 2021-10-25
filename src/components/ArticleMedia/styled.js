import styled from "styled-components"

export const Wrapper = styled.div`

    @media (min-width: 800px) {
        float: ${props => props.float ? "right" : "none" };
    }

`

export const Caption = styled.h5`

`