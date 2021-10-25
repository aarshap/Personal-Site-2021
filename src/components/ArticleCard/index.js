import React from "react"
import * as Styled from "./styled"
import { Link } from "gatsby"
import Box from "../Box"
import Pill from "../Pill"

export default (props) => {
    return (
        <Styled.Wrapper>
            <Link to={props.slug}>
                <Box>
                    <Styled.Content>
                        <Styled.Title>{props.title}</Styled.Title>
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
                    </Styled.Content>
                </Box>
            </Link>
        </Styled.Wrapper>
    )
}