import styled from "styled-components"
import { Link } from "gatsby"

export const Masonry = styled.div`
    display: flex;
    gap: 24px;
`

export const MasonryColumn = styled.div`
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    gap: 24px;
`

export const ImageWrapper = styled.div`
    margin-bottom: 32px;
`

export const Title = styled.h3`
    margin: 0 0 8px;
`

export const Dek = styled.h3`
    margin: 0 0 16px;
`

export const StyledLink = styled(Link)`
    background-color: ${props => props.theme.color.brand.background};
    border-radius: 56px;
    color: ${props => props.theme.color.text.normal};
    display: flex;
    flex-direction: column;
    padding: 32px;
    text-decoration: none;

    &.vice {
        background-color: ${props => props.theme.color.text.normal};
        color: ${props => props.theme.color.background.normal};
        margin-bottom: 24px;
        overflow: hidden;
        text-align: center;

        div${ImageWrapper} {
            margin: -32px -32px 32px -32px;
        }

    }

    &.cover {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;

        div${ImageWrapper} {
            transform: rotate(-15deg) translateX(-40px);
        }

        .gatsby-image-wrapper {
            overflow: visible;
        }

        img {
            -webkit-filter: drop-shadow(-16px 16px 12px rgba(0,0,0,0.08));
            filter: drop-shadow(-16px 16px 12px rgba(0,0,0,0.08));
        }
      
    }

    &.karma {

        div${ImageWrapper} {
            margin: 0 32px 32px;
        }

        .gatsby-image-wrapper {
            overflow: visible;
        }

        img {
            filter: drop-shadow(0 16px 12px rgba(0,0,0,0.08));
        }

    }

`