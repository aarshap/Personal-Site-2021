import { useState, useEffect } from "react"

export const useScrollHandler = () => {

    const [scroll, setScroll] = useState(1)

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY < 10
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }

        document.addEventListener("scroll", onScroll)

        return () => {
            document.removeEventListener("scroll", onScroll)
        }

    }, [scroll, setScroll])

    return scroll

}