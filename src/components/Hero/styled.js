import styled from "styled-components"
import { media } from "../../styles/MediaQueries"

export const Wrapper = styled.div`
    
    @media ${media.md} {
        text-align: center;
    }

`

export const Statement = styled.h1`
    margin-bottom: 32px;
    max-width: 1440px;

    .small { display: block; }
    .large { display: none; }

    @media ${media.sm} {
        font-size: calc(64px + (96 - 64) * ((100vw - 375px) / (800 - 375)));
    }

    @media ${media.md} {
        font-size: calc(60px + (120 - 60) * ((100vw - 800px) / (1600 - 800)));
        margin: 0 auto 80px;

        .small { display: none; }
        .large { display: block; }

    }

    @media ${media.lg} {
        font-size: 120px;
    }

` 

export const Bio = styled.h3`

    &:not(:last-child) {
        margin-bottom: 1em;
    }

`