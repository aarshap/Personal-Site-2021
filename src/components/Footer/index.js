import React from "react"
import * as Styled from "./styled"
import Grid from "../Grid"

export default () => {
    return (
        <Styled.Wrapper>
            <div className="container">
                <Grid>
                    <div>
                        <h2>Thanks for visiting.</h2>
                    </div>
                    <div>
                    <Styled.Title>Keep in touch.</Styled.Title>
                    <Styled.Statement>I'm looking for my next full-time role. If you'd like to work together, say hi.</Styled.Statement>
                    <Styled.Links>
                        <a className="inverted" href="https://twitter.com/aaronshapiro">Twitter</a>
                        <a className="inverted" href="https://twitch.tv/okayaaron">Twitch</a>
                        <a className="inverted" href="https://www.linkedin.com/in/aaron-shapiro-976922109/">LinkedIn</a>
                        <a className="inverted" href="https://github.com/aarshap/">GitHub</a>
                        <a className="inverted" href="mailto:aaron@aaron.mn">Email</a>
                    </Styled.Links>
                    </div>
                </Grid>
            </div>
        </Styled.Wrapper>
    )
}