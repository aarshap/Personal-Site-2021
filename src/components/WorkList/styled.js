import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../../styles/MediaQueries"

export const SectionTitle = styled.h3`
    margin-bottom: 24px;

    @media ${media.md} {
        text-align: center;
    }

`

export const Masonry = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media ${media.md} {
        flex-direction: row;
    }

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
    background-color: ${props => props.theme.color.background.brand};
    border-radius: 32px;
    color: ${props => props.theme.color.text.normal};
    display: flex;
    flex-direction: column;
    padding: 24px;
    text-decoration: none;

    @media ${media.md} {
        border-radius: 56px;
        padding: 32px;
    }

    :hover ${Dek} {
        color: ${props => props.theme.color.text.normal};
    }

    &.vice {
        background-color: ${props => props.theme.color.background.inverted};
        color: ${props => props.theme.color.text.inverted};
        margin-bottom: 24px;
        overflow: hidden;

        @media ${media.md} {
            text-align: center;
        }

        div${ImageWrapper} {
            margin: -24px -24px 24px -24px;
            user-select: none;

            @media ${media.md} {
                margin: -32px -32px 32px -32px;
            }

        }

        :hover ${Dek} {
            color: ${props => props.theme.color.text.inverted};
        }    

    }

    &.cover {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;

        div${ImageWrapper} {
            display: none;

            @media ${media.md} {
                display: block;
                transform: rotate(-15deg) translateX(-40px);
                user-select: none;    
            }

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
            display: none;

            @media ${media.md} {
                display: block;
                margin: 0 32px 32px;
                user-select: none;    
            }

        }

        .gatsby-image-wrapper {
            overflow: visible;
        }

        img {
            filter: drop-shadow(0 16px 12px rgba(0,0,0,0.08));
        }

    }

`