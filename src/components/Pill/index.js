import React from "react"
import * as Styled from "./styled"

export default (props) => {
    return (
        <Styled.Wrapper>
            <h5>{props.children}</h5>
        </Styled.Wrapper>
    )
}