import styled from "styled-components"

export const Wrapper = styled.div`
    text-align: center;
`

export const Statement = styled.h1`
    font-size: 56px;
    margin: 0 auto 80px;
    max-width: 1440px;

    .small { display: block; }
    .large { display: none; }

    @media screen and (min-width: 800px) {
        font-size: calc(60px + (120 - 60) * ((100vw - 800px) / (1600 - 800)));

        .small { display: none; }
        .large { display: block; }

    }

    @media screen and (min-width: 1600px) {
        font-size: 120px;
    }

` 

export const Highlight = styled.span`
    color: ${props => props.theme.color.brand.primary};
`