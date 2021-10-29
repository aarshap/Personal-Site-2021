import React, { useState } from "react"
import * as Styled from "./styled"
import { useViewportScroll } from "framer-motion"

export default (props) => {

    //  State

    const [showBar, setShowBar] = useState(false)

    // Scroll depth

    const { scrollYProgress } = useViewportScroll()
    const { scrollY } = useViewportScroll()

    // Hide/show bar

    const toggleBar = () => {
        scrollY.current >= 160 ? setShowBar(true) : setShowBar(false)
    }

    window.addEventListener("scroll", toggleBar)

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