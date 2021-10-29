import styled from "styled-components"
import { media } from "../../styles/MediaQueries"

export const Wrapper = styled.div`
    background-color: ${props => props.theme.color.background.inverted};
    border-radius: 32px 32px 0 0;
    color: ${props => props.theme.color.text.inverted};
    margin: 0 -24px;

    @media ${media.md} {
        border-radius: 56px 56px 0 0;
        margin: 0;
    }

    h3:not(:last-child) {
        margin-bottom: 16px;
    }

`

export const PrimaryWrapper = styled.div`
    border-bottom: 3px solid ${props => props.theme.color.divider.inverted};
    padding: 120px 24px;

    @media ${media.md} {
        padding: 120px 32px;
    }
    
`

export const SecondaryWrapper = styled.div`
    padding: 40px 24px 16px;

    @media ${media.md} {
        padding: 56px 32px;
    }

`

export const SecondaryInner = styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;
    justify-content: space-between;

    @media ${media.md} {
        flex-direction: row;
    }

`

export const Links = styled.h3`

    a {
        display: inline-block;

        &:not(:last-child) {
            margin-right: 16px;
        }

    }

`