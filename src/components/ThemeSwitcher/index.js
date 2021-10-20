import React, { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export default () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    // Click handler

    const handleClick = () => {
        toggleTheme()
    }

    return (
        <button onClick={() => handleClick()}>
            {theme === "light" ?
                <span>Light</span>
            :
                <span>Dark</span>
            }
        </button>
    )
    
}