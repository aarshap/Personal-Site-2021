import styled from "styled-components"
import { Link } from "gatsby"

export const Overlay = styled.div`
    background-color: ${props => props.theme.color.text.normal};
    bottom: 0;
    left: 0;
    opacity: 0.9;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;

    &:hover {
        cursor: pointer;
    }

`

export const Menu = styled.div`
    align-items: stretch;
    background-color: ${props => props.theme.color.background.normal};
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    padding: 0 120px;
    position: fixed;
    right: 50%;
    top: 0;
    z-index: 3;
`

export const StyledLink = styled(Link)`
    align-items: center;
    color: ${props => props.theme.color.text.normal};
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
    text-decoration: none;

    &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.color.divider.normal};
    }

`

export const Title = styled.h3`
    margin: 0;
`