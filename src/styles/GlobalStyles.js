import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

    // Variables

    :root {

        // Font families

        --family-heading: stratos, sans-serif;
        --family-body: stratos, sans-serif;
        --family-accent: halyard-micro, sans-serif;

        // Line heights

        --line-height-heading: 1.1;
        --line-height-paragraph: 1.5;

    // Base page styles

    body {
        background-color: ${props => props.theme.color.background};
        color: ${props => props.theme.color.text};
        font-family: var(--family-body);
        font-weight: 400;
        line-height: var(--line-height-heading);
        padding: 0 80px;
        margin: 0;
    }

    // Typography

    h1 {
        font-size: 80px;
        line-height: var(--line-height-heading);
    }

    h2 {
        font-size: 56px;
        line-height: var(--line-height-heading);
    }

    h3 {
        font-size: 32px;
        line-height: var(--line-height-heading);
    }

    h4 {
        font-size: 28px;
        line-height: var(--line-height-heading);
    }

    h5 {
        font-family: var(--family-accent);
        font-size: 12px;
        font-weight: 400;
        line-height: var(--line-height-heading);
    }

    p {
        font-size: 28px;
        line-height: var(--line-height-paragraph);
    }

    // Buttons and links

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font: inherit;
        line-height: initial;
        margin: 0;
        padding: 0;
        text-transform: inherit;
    }

    // Containers

    .container {
        margin: 0 auto;
        max-width: 800px;
    }

`

export default GlobalStyles