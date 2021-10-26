import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

    // Variables

    :root {

        // Font families

        --family-heading: stratos, sans-serif;
        --family-body: stratos, sans-serif;
        --family-accent: halyard-micro, sans-serif;

        // Line heights

        --line-height-display: 1.1;
        --line-height-heading: 1.5;
        --line-height-paragraph: 1.7;

    }

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

    section {
        margin: 160px auto;
    }

    // Typography

    h1 {
        font-family: var(--family-heading);
        font-size: 80px;
        font-weight: 800;
        line-height: var(--line-height-display);
    }

    h2 {
        font-family: var(--family-heading);
        font-size: 56px;
        font-weight: 800;
        line-height: var(--line-height-heading);
    }

    h3 {
        font-family: var(--family-heading);
        font-size: 28px;
        font-weight: 500;
        line-height: var(--line-height-heading);
    }

    h4 {
        font-family: var(--family-accent);
        font-size: 12px;
        font-weight: 400;
        line-height: var(--line-height-heading);
    }

    p {
        font-family: var(--family-body);
        font-size: 28px;
        font-weight: 400;
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