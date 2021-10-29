import styled from "styled-components"
import { media } from "../../styles/MediaQueries"
import { motion } from "framer-motion"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.background.normal};
    box-shadow: ${props => props.theme.navShadow};
    display: none;
    height: 80px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    z-index: 4;

    @media ${media.md} {
        display: flex;
    }

`

export const Title = styled.h3`

`

export const Progress = styled(motion.div)`
    background-color: ${props => props.theme.color.text.brand};
    bottom: 0;
    height: 2px;
    left: 0;
    position: absolute;
    right: 0;
    transform: scaleX(${props => props.progress});
`