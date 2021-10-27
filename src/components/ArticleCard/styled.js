import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
    align-items: center;
    background-color: ${props => props.theme.color.brand.background};
    border-radius: 56px;
    color: ${props => props.theme.color.text.normal};
    display: flex;
    margin-bottom: 24px;
    padding: 32px;
    text-decoration: none;
`

export const Title = styled.h3`
    flex-basis: 100%;
    margin: 0;
`