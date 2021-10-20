import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

    // Base page styles

    body {
        background-color: ${props => props.theme.background};
    }

`

export default GlobalStyles