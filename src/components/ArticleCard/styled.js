import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../../styles/MediaQueries"

export const StyledLink = styled(Link)`
    background-color: ${props => props.theme.color.background.brand};
    border-radius: 32px;
    color: ${props => props.theme.color.text.normal};
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    padding: 24px;
    text-decoration: none;

    @media ${media.md} {
        align-items: center;
        border-radius: 56px;
        flex-direction: row;
        padding: 32px;
    }

`

export const Title = styled.h3`
    flex-basis: 100%;

    @media ${media.md} {
        flex-basis: 100%;
    }

`

export const Pills = styled.div`
    display: flex;
    flex-grow: 1;
`