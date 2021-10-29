import styled from "styled-components"

export const Wrapper = styled.div`
    margin: 80px auto;

    @media (min-width: 800px) {
        float: ${props => props.float ? "right" : "none" };
        margin: ${props => props.float ? "0 0 80px 80px" : "80px auto" };
        width: ${props => props.float ? "50%" : "auto" };
    }
    
    video,
    .gatsby-resp-image-wrapper {
        border-radius: 4px;
        box-shadow: ${props => props.hasShadow ? "0 2px 8px rgba(0,0,0,0.1)" : "none"};
        overflow: hidden;
    }

`

export const Caption = styled.h4`
    margin-top: 32px;
`