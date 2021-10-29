import styled from "styled-components"
import { media } from "../../styles/MediaQueries"

// SVGs

export const Logo = styled.svg`
    height: 20px;
    transform: scale(1.2);
    width: 44px;

    @media ${media.md} {
        transform: scale(1);
    }

`

export const Icon = styled.svg`
    height: 40px;
    transform: scale(0.7);
    width: 40px;

    @media ${media.md} {
        transform: scale(1);
    }

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
    align-items: center;
    background-color: ${props => props.theme.color.background.normal};
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    display: ${props => props.position === "primary" ? "flex" : "none"};
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    user-select: none;
    z-index: 5;

    @media ${media.md} {
        background-color: transparent;
        bottom: 0;
        box-shadow: none;
        display: flex;
        flex-direction: column;
        height: auto;
        left: ${props => props.position === "primary" ? 0 : "auto"};
        right: ${props => props.position === "secondary" ? 0 : "auto"};
        width: 80px;
    }

`

// Buttons

export const ClickTarget = styled.div`
    align-items: center;
    display: flex;
    min-height: 80px;
    justify-content: center;
    width: 80px;

    &:hover ${Path},
    &:hover ${Circle} {
        fill: ${props => props.theme.color.text.brand};
    }

    @media ${media.md} {
        transform: ${props => props.rotate ? `rotate(${props.rotate}deg)` : "none"};
    }

`

// Individual elements used to modify order

export const LogoWrapper = styled.div`
    order: 2;

    @media ${media.md} {
        order: 1;
    }

`

export const WorkWrapper = styled.div`
    order: 1;

    @media ${media.md} {
        order: 2;
    }

`

export const ThemeWrapper = styled.div`
    order: 3;
`