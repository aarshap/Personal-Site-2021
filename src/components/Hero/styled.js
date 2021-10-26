import styled from "styled-components"

export const Wrapper = styled.section`
    text-align: center;
`

export const Statement = styled.h1`
    font-size: 120px;
    margin: 0 auto 80px;
    max-width: 1440px;

    @media screen and (min-width: 1000px) {
        font-size: 80px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 100px;
    }

    @media screen and (min-width: 1600px) {
        font-size: 120px;
    }

` 

export const Highlight = styled.span`
    color: ${props => props.theme.color.brand.primary};
`