import styled from "styled-components"
import { Link } from "gatsby"

// SVGs

export const Logo = styled.svg`
    height: 20px;
    width: 44px;
`

export const Icon = styled.svg`
    height: 40px;
    width: 40px;
`

export const Path = styled.path`
    fill: ${props => props.theme.color.text.inverted};
    fill-rule: evenodd;
    clip-rule: evenodd;
`

export const Circle = styled.circle`
    fill: ${props => props.theme.color.text.inverted};
`

export const BrandCircle = styled.circle`
    fill: ${props => props.theme.color.brand.primary};
`

// Placement

export const LogoDotWrapper = styled.div`
    display: flex;
    left: 0;
    position: fixed;
    top: 0;
    z-index: 4;
`

export const Bar = styled.div`
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: ${props => props.position === "left" ? 0 : "auto"};
    mix-blend-mode: difference;
    position: fixed;
    right: ${props => props.position === "right" ? 0 : "auto"};
    top: 0;
    width: 80px;
    z-index: 4;

    > div {
        min-height: 80px;
    }

`

// Buttons

export const ClickTarget = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 80px;
    transform: ${props => props.rotate ? `rotate(${props.rotate}deg)` : "none"};
    width: 80px;
`

export const StyledButton = styled.button`
    color: ${props => props.theme.color.text.inverted};
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.color.text.inverted};
    }

`

export const StyledLink = styled(Link)`
    color: ${props => props.theme.color.text.inverted};
    text-decoration: none;

    &:visited {
        color: ${props => props.theme.color.text.inverted};
    }
    
`