import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
    align-items: stretch;
    background-color: ${props => props.theme.color.background};
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    padding: 0 120px;
    position: fixed;
    right: 50%;
    top: 0;
`

export const StyledLink = styled(Link)`
    align-items: center;
    color: ${props => props.theme.color.text};
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
    text-decoration: none;

    &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.color.divider};
    }

`

export const Title = styled.h3`
    margin: 0;
`