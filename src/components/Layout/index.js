import React from "react"
import * as Styled from "./styled"
import { motion, MotionConfig } from "framer-motion"
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
                    <MotionConfig
                        transition={{
                            duration: 0.2,
                            type: "tween"
                        }}
                    >
                        <GlobalStyles />
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