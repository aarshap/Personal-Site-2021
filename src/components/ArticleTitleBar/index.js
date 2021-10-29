import React, { useState } from "react"
import * as Styled from "./styled"
import { useTransform, useViewportScroll } from "framer-motion"

export default (props) => {

    //  State

    const [showBar, setShowBar] = useState(false)

    // Hide/show bar

    const toggleBar = () => {
        window.scrollY >= 160 ? setShowBar(true) : setShowBar(false)
    }

    // Scroll depth

    window.addEventListener("scroll", toggleBar)

    const { scrollYProgress } = useViewportScroll()

    return (
        <>
            {showBar &&
                <Styled.Wrapper>
                    <Styled.Title>{props.title}</Styled.Title>
                    <Styled.Progress
                        style={{
                            originX: 0,
                            scaleX: scrollYProgress
                        }}
                    />
                </Styled.Wrapper>
            }
        </>
    )
}