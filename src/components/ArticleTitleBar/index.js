import React, { useState } from "react"
import * as Styled from "./styled"

export default (props) => {

    const [showBar, setShowBar] = useState(false)

    return (
        <>
            {showBar &&
                <Styled.Wrapper>
                    <Styled.Title>{props.title}</Styled.Title>
                </Styled.Wrapper>
            }
        </>
    )
}