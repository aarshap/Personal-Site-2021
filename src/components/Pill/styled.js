import styled from "styled-components"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.brand.primary};
    border-radius: 16px;
    color: ${props => props.theme.color.background};
    display: inline-flex;
    height: 32px;
    padding: 0 16px;
    text-decoration: none;

    h5 {
        margin: 0;
    }

`