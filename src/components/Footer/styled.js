import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: ${props => props.theme.color.background.inverted};
    border-radius: 56px 56px 0 0;
    color: ${props => props.theme.color.text.inverted};

    h3:not(:last-child) {
        margin-bottom: 16px;
    }

`

export const PrimaryWrapper = styled.div`
    border-bottom: 3px solid ${props => props.theme.color.divider.inverted};
    padding: 120px 32px;
`

export const SecondaryWrapper = styled.div`
    padding: 56px 32px;
`

export const SecondaryInner = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Links = styled.h3`

    a {
        display: inline-block;

        &:not(:last-child) {
            margin-right: 16px;
        }

    }

`