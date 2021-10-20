import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        if (theme === "light") {
            window.localStorage.setItem("theme", "dark")
            setTheme("dark")
        } else {
            window.localStorage.setItem("theme", "light")
            setTheme("light")
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme")
        localTheme && setTheme(localTheme)
    }, [])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export { ThemeContext, ThemeContextProvider }