import React from "react"
import * as Styled from "./styled"

export default (props) => {
    return (
        <Styled.Wrapper>
            <h4>{props.children}</h4>
        </Styled.Wrapper>
    )
}