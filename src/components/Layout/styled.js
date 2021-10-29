import styled from "styled-components"
import { media } from "../../styles/MediaQueries"

export const Wrapper = styled.div`
    background-color: ${props => props.theme.color.background.normal};
    overflow: auto;
    padding: 80px 24px 0;

    @media ${media.md} {
        padding: 0 80px;
    }

`

export const TinyMask = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.background.normal};
    bottom: 0;
    display: none;
    font-size: 64px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;

    @media (max-width: 300px) {
        display: flex;
    }

`