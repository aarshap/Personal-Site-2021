import styled from "styled-components"

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
    fill: ${props => props.theme.color.text.normal};
    fill-rule: evenodd;
    clip-rule: evenodd;
`

export const Circle = styled.circle`
    fill: ${props => props.theme.color.text.normal};
`

export const BrandCircle = styled.circle`
    fill: ${props => props.theme.color.text.brand};
`

// Placement

export const Bar = styled.div`
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: ${props => props.position === "left" ? 0 : "auto"};
    position: fixed;
    right: ${props => props.position === "right" ? 0 : "auto"};
    top: 0;
    user-select: none;
    width: 80px;
    z-index: 5;

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

    &:hover ${Path},
    &:hover ${Circle} {
        fill: ${props => props.theme.color.text.brand};
    }

`