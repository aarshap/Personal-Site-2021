import React from "react"
import * as Styled from "./styled"
import Grid from "../Grid"
import Pill from "../Pill"

export default (props) => {
    return (
        <>
            <Styled.Eyebrow>
                {props.type === "Work"
                    ? <>{props.title}</>
                    : <>{props.type}</>
                }
            </Styled.Eyebrow>

            <Styled.Title>
                {props.type === "Work"
                    ? <>{props.tagline}</>
                    : <>{props.title}</>
                }
            </Styled.Title>


            <Styled.Dek>
                {props.dek}
            </Styled.Dek>

            {props.type === "Work"
                ?
                    <Grid>
                        <Styled.MetaWrapper>
                            <h4>Time</h4>
                            <h3>{props.dateStart === props.dateEnd ? props.dateEnd : `${props.dateStart} - ${props.dateEnd}`}</h3>
                        </Styled.MetaWrapper>
                        <Styled.MetaWrapper>
                            <h4>Role{props.roles.length > 1 && `s`}</h4>
                            {props.roles.map((role, index) => (
                                <h3 key={index}>{role}</h3>
                            ))}
                        </Styled.MetaWrapper>
                    </Grid>
                :
                    <>
                        {props.date && <Pill>{props.date}</Pill>}
                        {props.category && <Pill>{props.category}</Pill>}
                    </>
            }
        </>
    )
}