import styled from "styled-components"

export const Overlay = styled.div`
    background-color: ${props => props.theme.color.text};
    bottom: 0;
    left: 0;
    opacity: 0.9;
    position: fixed;
    right: 0;
    top: 0;

    &:hover {
        cursor: pointer;
    }

`