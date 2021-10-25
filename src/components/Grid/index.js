import React from "react"
import * as Styled from "./styled"

const Grid = (props) => {
    const columnCount = React.Children.count(props.children)

    return (
        <Styled.Wrapper
            alignItems={props.alignItems}
            columnCount={columnCount}
            tight={props.tight}
        >
            {props.children}
        </Styled.Wrapper>
    )
    
}

Grid.defaultProps = {
    alignItems: "top",
    tight: false,
    stackMobile: true
}

export default Grid