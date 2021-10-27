import React from "react"
import * as Styled from "./styled"
import Pill from "../Pill"

export default (props) => {
    return (
        <>
            <Styled.Type>{props.type}</Styled.Type>
            <Styled.Title>{props.title}</Styled.Title>
            <Styled.Dek>{props.dek}</Styled.Dek>
            {props.date && <Pill>{props.date}</Pill>}
            {props.category && <Pill>{props.category}</Pill>}
        </>
    )
}