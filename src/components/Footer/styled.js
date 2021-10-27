import styled from "styled-components"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.background.inverted};
    color: ${props => props.theme.color.text.inverted};
    margin: 0 -80px;
    padding: 160px 32px;
    position: relative;

    a {
        display: inline-block;
        margin-bottom: 8px;

        &:not(:last-child) {
            margin-right: 16px;
        }

    }

`