import styled from "styled-components"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.background.inverted};
    color: ${props => props.theme.color.text.inverted};
    margin: 0 -80px;
    padding: 160px 32px;
    position: relative;
`

export const Title = styled.h4`
    margin-bottom: 16px;
`

export const Statement = styled.h3`
    margin-bottom: 16px;
`

export const Links = styled.h3`

    a {
        display: inline-block;
        margin-bottom: 8px;

        &:not(:last-child) {
            margin-right: 16px;
        }

    }

`