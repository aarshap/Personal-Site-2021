import React from "react"
import * as Styled from "./styled"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
    return (
        <Styled.Wrapper>
            <Styled.ImageWrapper>
                <StaticImage
                    src="../../images/footer.jpg"
                    alt="The author"
                />
            </Styled.ImageWrapper>
            <Styled.Inner>
                <div className="container">
                    <Styled.Content>
                        <h4>ICYMI.</h4>
                        <h3>I’m Aaron – a product designer. Thanks for visiting.</h3>
                        <h4>Get in touch.</h4>
                        <h3>
                            <a href="https://twitter.com/aaronshapiro">Twitter</a>
                            <a href="https://twitch.tv/okayaaron">Twitch</a>
                            <a href="https://www.linkedin.com/in/aaron-shapiro-976922109/">LinkedIn</a>
                            <a href="https://github.com/aarshap/">GitHub</a>
                            <a href="mailto:aaron@aaron.mn">Email</a>
                        </h3>
                    </Styled.Content>
                </div>
            </Styled.Inner>
        </Styled.Wrapper>
    )
}