import React from "react"
import * as Styled from "./styled"
import { StaticImage } from "gatsby-plugin-image"

const InfoIntro = () => {
    return (
        <Styled.Wrapper>
            <Styled.ImageWrapper>
                <StaticImage
                    src="../../images/info.jpg"
                    alt="Tue author"
                    placeholder="none"
                    layout="constrained"
                    quality="90"
                />
            </Styled.ImageWrapper>
            <Styled.Content>
                <div className="container">
                    <Styled.PageTitle>Info</Styled.PageTitle>
                    <Styled.Greeting>Nice to<br />meet you.</Styled.Greeting>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    )
}

export default InfoIntro