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
                    <h4>Keep in touch.</h4>
                    <h3>I'm looking for my next full-time role. If you'd like to work together, say hi.</h3>
                    <h3>
                        <a href="https://twitter.com/aaronshapiro">Twitter</a>
                        <a href="https://twitch.tv/okayaaron">Twitch</a>
                        <a href="https://www.linkedin.com/in/aaron-shapiro-976922109/">LinkedIn</a>
                        <a href="https://github.com/aarshap/">GitHub</a>
                        <a href="mailto:aaron@aaron.mn">Email</a>
                    </h3>
                    </div>
                </Grid>
            </div>
        </Styled.Wrapper>
    )
}