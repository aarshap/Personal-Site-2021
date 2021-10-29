import styled from "styled-components"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.text.brand};
    border-radius: 16px;
    color: ${props => props.theme.color.background.normal};
    display: inline-flex;
    height: 32px;
    padding: 0 16px;
    text-decoration: none;
    user-select: none;

    h4 {
        margin: 0;
    }

    &:not(:last-child) {
        margin-right: 8px;
    }

`