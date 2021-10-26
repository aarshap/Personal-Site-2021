import React from "react"
import * as Styled from "./styled"
import { StaticImage } from "gatsby-plugin-image"
import Pill from "../Pill"

export default (props) => {
    return (
        <>
            <Styled.StyledLink
                to="/work/vice"
                className="vice"
            >
                <Styled.ImageWrapper>
                    <StaticImage
                        src="../../images/work_list/vice.png"
                        alt="VICE"
                        placeholder="none"
                        layout="constrained"
                        quality="90"
                    />
                </Styled.ImageWrapper>
                <div>
                    <Styled.Title>VICE</Styled.Title>
                    <Styled.Dek>Small team. Big network</Styled.Dek>
                    <Pill>2016–2020</Pill>
                </div>
            </Styled.StyledLink>
            <Styled.Masonry>
                <Styled.MasonryColumn>
                    <Styled.StyledLink
                        to="/work/cover"
                        className="cover"
                    >
                        <Styled.ImageWrapper>
                            <StaticImage
                                src="../../images/work_list/cover.png"
                                alt="Cover"
                                placeholder="none"
                                layout="constrained"
                                quality="90"
                            />
                        </Styled.ImageWrapper>
                        <div>
                            <Styled.Title>Cover</Styled.Title>
                            <Styled.Dek>Split the check in seconds.</Styled.Dek>
                            <Pill>2015</Pill>
                        </div>
                    </Styled.StyledLink>
                </Styled.MasonryColumn>
                <Styled.MasonryColumn>
                    <Styled.StyledLink
                        to="/work/karma"
                        className="karma"
                    >
                        <Styled.ImageWrapper>
                            <StaticImage
                                src="../../images/work_list/karma.png"
                                alt="Karma Go"
                                placeholder="none"
                                layout="constrained"
                                quality="90"
                            />
                        </Styled.ImageWrapper>
                        <div>
                            <Styled.Title>Karma</Styled.Title>
                            <Styled.Dek>Simpler, friendlier Internet for everyone.</Styled.Dek>
                            <Pill>2016</Pill>
                        </div>
                    </Styled.StyledLink>
                    <Styled.StyledLink to="/work/etsy">
                        <div>
                            <Styled.Title>Etsy</Styled.Title>
                            <Styled.Dek>People Power.</Styled.Dek>
                            <Pill>2013–2015</Pill>
                        </div>
                    </Styled.StyledLink>
                </Styled.MasonryColumn>
            </Styled.Masonry>
        </>
    )
}