import React from "react"
import { ThemeContextProvider } from "../../contexts/ThemeContext"
import GlobalStyles from "../../styles/GlobalStyles"
import Nav from "../Nav"
import Theme from "../Theme"

export default ({ children }) => {
    return (
        <>
            <ThemeContextProvider>
                <Theme>
                    <GlobalStyles />
                    <Nav />
                    { children }
                </Theme>
            </ThemeContextProvider>
        </>
    )
}