import React from "react"
import * as Styled from "./styled"

const ArticleBody = (props) => {
    return (
        <Styled.Wrapper>
                {props.children}
        </Styled.Wrapper>
    )
}

export default ArticleBody