import React from "react"
import * as Styled from "./styled"
import { ThemeContextProvider } from "../../contexts/ThemeContext"
import GlobalStyles from "../../styles/GlobalStyles"
import Footer from "../Footer"
import Nav from "../Nav"
import Theme from "../Theme"

export default ({ children }) => {
    return (
        <>
            <ThemeContextProvider>
                <Theme>
                    <GlobalStyles />
                    <Styled.Wrapper>
                        <Nav />
                        { children }
                        <Footer />
                    </Styled.Wrapper>
                </Theme>
            </ThemeContextProvider>
        </>
    )
}