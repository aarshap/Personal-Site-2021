import React from "react"
import * as Styled from "./styled"

export default () => {
    return (
        <Styled.Wrapper>
            <Styled.Statement>
                <div className="large">
                    A <em>good guy</em> who<br />
                    makes <em>good websites</em>.
                </div>
                <div className="small">
                    A <em>good<br />
                    guy</em> who<br />
                    makes<br />
                    <em>good<br />
                    websites</em>.
                </div>
            </Styled.Statement>
            <div className="container">
                <Styled.Bio>I’m Aaron – a Brooklyn-based product designer with over a decade of experience working on behalf of journalists, artists, and makers.</Styled.Bio>
                <Styled.Bio>Creative people make me <em>happy</em>.</Styled.Bio>
            </div>
        </Styled.Wrapper>
    )
}