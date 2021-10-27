import styled from "styled-components"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.background.inverted};
    color: ${props => props.theme.color.text.inverted};
    display: flex;
    height: 600px;
    margin: 0 -80px;
    position: relative;
`

export const ImageWrapper = styled.div`
    height: 600px;
    left: 50%;
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
    color: ${props => props.theme.color.brand.primary};
    margin-bottom: 16px;
`

export const Greeting = styled.h2`

`