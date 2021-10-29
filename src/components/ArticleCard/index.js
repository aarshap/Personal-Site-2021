import React from "react"
import * as Styled from "./styled"
import Pill from "../Pill"

export default (props) => {
    return (
        <Styled.StyledLink to={props.slug}>
            <Styled.Title>{props.title}</Styled.Title>
            <Styled.Pills>
                {props.date &&
                    <Pill>
                        {props.date}
                    </Pill>
                }
                {props.category &&
                    <Pill>
                        {props.category}
                    </Pill>
                }
            </Styled.Pills>
        </Styled.StyledLink>
    )
}