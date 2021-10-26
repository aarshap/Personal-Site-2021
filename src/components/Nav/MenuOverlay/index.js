import React from "react"
import * as Styled from "./styled"

export default (props) => {

    return (
        <Styled.Overlay onClick={() => props.closeMenus()} />
    )
}