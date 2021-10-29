import styled from "styled-components"
import { media } from "../../styles/MediaQueries"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.background.inverted};
    border-radius: 0 0 32px 32px;
    color: ${props => props.theme.color.text.inverted};
    display: flex;
    height: 600px;
    margin: 0 -24px;
    overflow: hidden;
    padding: 0 32px;
    position: relative;

    @media ${media.md} {
        border-radius: 0 0 56px 56px;
        margin: 0;
    }

`

export const ImageWrapper = styled.div`
    height: 600px;
    left: 50%;
    mix-blend-mode: screen;
    position: absolute;
    transform: translateX(-30%);
    top: 0;
    width: 600px;
`

export const Content = styled.div`
    flex-grow: 1;
    position: relative;
    z-index: 2;
`

export const PageTitle = styled.h3`
    color: ${props => props.theme.color.text.brand};
    margin-bottom: 16px;
`

export const Greeting = styled.h2`

`