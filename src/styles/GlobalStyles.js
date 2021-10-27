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

    // Reset and adjusting defaults

    *,
    *:after,
    *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        width: 100%;
        max-width: 100%;
    }

    svg {
        display: block;
    }

    video {
        display: block;
        width: 100%;
    }

    // Base page styles

    body {
        background-color: ${props => props.theme.color.background.normal};
        color: ${props => props.theme.color.text.normal};
        font-family: var(--family-body);
        font-weight: 400;
        line-height: var(--line-height-heading);
        margin: 0;
    }

    section {
        margin: 120px auto;
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
        line-height: var(--line-height-display);
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

    em {
        color: ${props => props.theme.color.brand.primary};
        font-style: normal;
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

    a,
    a:visited,
    button {
        color: ${props => props.theme.color.text.normal};
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.color.brand.primary};
        text-decoration-thickness: 3px;
        text-underline-offset: 0.1em;

        &.inverted {
            color: ${props => props.theme.color.text.inverted};
            text-decoration-color: ${props => props.theme.color.brand.primary};
        }

        &.hideUnderline {
            text-decoration: none;
        }

    }

    // Containers

    .container {
        margin: 0 auto;
        max-width: 800px;
    }

    // Generic .has-shadow class to place a shadow on any element

    .has-shadow {
        box-shadow: 0 32px 32px rgba(0,0,0,0.05), 0 16px 16px rgba(0,0,0,0.05), 0 8px 8px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.05), 0 0 2px rgba(0,0,0,0.2);
    }

`

export default GlobalStyles