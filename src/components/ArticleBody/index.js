import React from "react"
import * as Styled from "./styled"

export default (props) => {
    return (
        <Styled.Wrapper>
                {props.children}
        </Styled.Wrapper>
    )
}