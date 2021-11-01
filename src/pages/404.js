import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import styled from "styled-components"

export default () => {

    const StyledLink = styled(Link)`
        align-items: center;
        bottom: 0;
        display: flex;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
    `

    const Horse = styled.img`
        display: block;
        height: 80vh;
        margin: 0 auto;
        object-fit: contain;
        width: 80vw;
    `
    
    return (
        <>
            <SEO title="404 Horse" />
            <StyledLink to="/">
                <Horse src="/horse.gif" alt="404 Horse" />
            </StyledLink>
        </>
    )
}