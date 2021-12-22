import React from "react"
import * as Styled from "./styled"
import { MotionConfig } from "framer-motion"
import { ThemeContextProvider } from "../../contexts/ThemeContext"
import GlobalStyles from "../../styles/GlobalStyles"
import Footer from "../Footer"
import Nav from "../Nav"
import Theme from "../Theme"

const Layout = ({ children }) => {
    return (
        <>
            <ThemeContextProvider>
                <Theme>
                    <MotionConfig
                        transition={{
                            duration: 0.2,
                            type: "tween"
                        }}
                    >
                        <GlobalStyles />
                        <Styled.TinyMask>&#129300;</Styled.TinyMask>
                        <Styled.Wrapper>
                            <Nav />
                            { children }
                            <Footer />
                        </Styled.Wrapper>
                    </MotionConfig>
                </Theme>
            </ThemeContextProvider>
        </>
    )
}

export default Layout