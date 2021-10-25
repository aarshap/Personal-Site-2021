import styled from "styled-components"

export const Wrapper = styled.div`
    display: grid;
    grid-gap: ${props => props.columnCount === 1 ? "0" : "24px"};
    grid-template-columns: repeat(1, minmax(0, 1fr));

    > :first-child {
        grid-row: 2;
    }

    @media (min-width: 800px) {
        align-items: ${props => props.alignItems ? props.alignItems : "start" };
        grid-template-columns: repeat(2, minmax(0, 1fr));

        > :first-child {
            grid-column: ${props => props.columnCount === 1 ? "2" : "1"};
            grid-row: 1;
        }

    }

`