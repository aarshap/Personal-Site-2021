import React from "react"
import * as Styled from "./styled"

export default (props) => {
    return (
        <Styled.Wrapper float={props.float}>
            {props.children}
            {props.caption && <Styled.Caption className="caption">{props.caption}</Styled.Caption> }
        </Styled.Wrapper>
    )
}