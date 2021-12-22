import React from "react"
import * as Styled from "./styled"

const Footer = () => {
    return (
        <Styled.Wrapper>
            <Styled.PrimaryWrapper>
                <div className="container">
                    <h3>
                        <em>Thanks for visiting.</em>
                    </h3>
                    <h3>I'm not currently looking for freelance or full-time work, but feel free to say hi.</h3>
                    <h3>
                        <a className="inverted" href="mailto:aaron@aaron.mn">aaron@aaron.mn</a>
                    </h3>
                </div>
            </Styled.PrimaryWrapper>
            <Styled.SecondaryWrapper>
                <div className="container">
                    <Styled.SecondaryInner>
                        <h3>
                            © {new Date().getFullYear()}
                        </h3>
                        <Styled.Links>
                            <a className="inverted" href="https://twitter.com/aaronshapiro">Twitter</a>
                            <a className="inverted" href="https://twitch.tv/okayaaron">Twitch</a>
                            <a className="inverted" href="https://github.com/aarshap/">GitHub</a>
                        </Styled.Links>
                    </Styled.SecondaryInner>
                </div>
            </Styled.SecondaryWrapper>
        </Styled.Wrapper>
    )
}

export default Footer