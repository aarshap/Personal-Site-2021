import styled from "styled-components"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.background.normal};
    border-bottom: 1px solid ${props => props.theme.color.divider.normal};
    display: flex;
    height: 80px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    z-index: 4;
`

export const Title = styled.h3`

`