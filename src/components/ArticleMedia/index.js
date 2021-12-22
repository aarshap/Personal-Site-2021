import React from "react"
import * as Styled from "./styled"

const ArticleMedia = (props) => {
    return (
        <Styled.Wrapper hasShadow={props.hasShadow} float={props.float}>
            {props.children}
            {props.caption && <Styled.Caption className="caption">{props.caption}</Styled.Caption> }
        </Styled.Wrapper>
    )
}

export default ArticleMedia