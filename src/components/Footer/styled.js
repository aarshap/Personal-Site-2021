import styled from "styled-components"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.text};
    border-radius: 56px 56px 0 0;
    color: ${props => props.theme.color.background};
    display: flex;
    height: 600px;
    overflow: hidden;
    padding: 0 32px;
    position: relative;

    a {
        color: ${props => props.theme.color.background};
        display: inline-block;
        margin-bottom: 8px;

        &:not(:last-child) {
            margin-right: 16px;
        }

    }

`

export const Inner = styled.div`
    flex-grow: 1;
`

export const Content = styled.div`
    max-width: 400px;
    position: relative;
    z-index: 2;
`

export const ImageWrapper = styled.div`
    height: 600px;
    position: absolute;
    left: 50%;
    transform: translateX(-160px);
    top: 0;
    width: 600px;
`