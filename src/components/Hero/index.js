import React from "react"
import * as Styled from "./styled"

export default () => {
    return (
        <Styled.Wrapper>
            <Styled.Statement>
                <div className="large">
                    A <Styled.Highlight>good guy</Styled.Highlight> who<br />
                    makes <Styled.Highlight>good websites</Styled.Highlight>.
                </div>
                <div className="small">
                    A <Styled.Highlight>good<br />
                    guy</Styled.Highlight> who<br />
                    makes<br />
                    <Styled.Highlight>good<br />
                    websites</Styled.Highlight>.
                </div>
            </Styled.Statement>
            <div className="container">
                <h3>I’m Aaron – a Brooklyn-based product designer with over a decade of experience working on behalf of journalists, artists, and makers.</h3>
                <h3>Creative people make me <Styled.Highlight>happy</Styled.Highlight>.</h3>
            </div>
        </Styled.Wrapper>
    )
}