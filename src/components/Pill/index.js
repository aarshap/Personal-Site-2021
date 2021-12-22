import React from "react"
import * as Styled from "./styled"

const Pill = (props) => {
    return (
        <Styled.Wrapper>
            <h4>{props.children}</h4>
        </Styled.Wrapper>
    )
}

export default Pill