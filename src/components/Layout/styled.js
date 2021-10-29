import styled from "styled-components"
import { media } from "../../styles/MediaQueries"

export const Wrapper = styled.div`
    background-color: ${props => props.theme.color.background.normal};
    overflow: auto;
    padding: 0 24px;

    @media ${media.md} {
        padding: 0 80px;
    }

`