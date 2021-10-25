import React, { useContext } from "react"
import * as Styled from "./styled"
import { ThemeContext } from "../../contexts/ThemeContext"

export default () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    // Click handler

    const handleClick = () => {
        toggleTheme()
    }

    return (
        <button onClick={() => handleClick()}>
            <Styled.ClickTarget>
                {theme === "light" ?
                    <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                        <Styled.Path d="M13 19a7 7 0 1 0 14 0h2a9 9 0 1 1-18 0h2Z" />
                        <Styled.Circle cx="16.5" cy="16.5" r="1.5" />
                        <Styled.Circle cx="23.5" cy="16.5" r="1.5" />
                        <Styled.Path d="M19 0h2v4.03a15.934 15.934 0 0 1 9.585 3.971l2.85-2.85 1.414 1.414L32 9.415A15.935 15.935 0 0 1 35.969 19H40v2h-4.03a15.935 15.935 0 0 1-3.971 9.585l2.85 2.85-1.414 1.414-2.85-2.85A15.935 15.935 0 0 1 21 35.969V40h-2v-4.03a15.935 15.935 0 0 1-9.585-3.971l-2.85 2.85-1.414-1.414L8 30.585A15.935 15.935 0 0 1 4.031 21H0v-2h4.03a15.934 15.934 0 0 1 3.971-9.585l-2.85-2.85 1.414-1.414L9.415 8A15.934 15.934 0 0 1 19 4.031V0Zm1 34c7.732 0 14-6.268 14-14S27.732 6 20 6 6 12.268 6 20s6.268 14 14 14Z" />
                    </Styled.Icon>                    
                :
                    <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                        <Styled.Path d="M26.503 5.377c.693.308 1.36.665 1.997 1.065-.617.388-1.206.816-1.763 1.282A15.966 15.966 0 0 0 21 20c0 2.007.37 3.927 1.044 5.697A7.003 7.003 0 0 0 27 19h2a9.004 9.004 0 0 1-6.121 8.53 16.068 16.068 0 0 0 5.621 6.028A15.944 15.944 0 0 1 20 36c-8.837 0-16-7.163-16-16S11.163 4 20 4c2.315 0 4.516.492 6.503 1.377ZM20.024 26H20a7 7 0 0 1-7-7h-2a9 9 0 0 0 9.852 8.96 18.063 18.063 0 0 0 3.887 5.218A13.973 13.973 0 0 1 20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6c1.665 0 3.26.29 4.739.822A17.953 17.953 0 0 0 19 20c0 2.104.361 4.123 1.024 6Z" />
                        <Styled.Path d="M36.5 22.5h2V21H40v-2h-1.5v-1.5h-2V19H35v2h1.5v1.5ZM1.5 5h2V3.5H5v-2H3.5V0h-2v1.5H0v2h1.5V5ZM1.5 40h2v-1.5H5v-2H3.5V35h-2v1.5H0v2h1.5V40Z" />
                        <Styled.Circle cx="16.5" cy="16.5" r="1.5" />
                        <Styled.Circle cx="23.5" cy="16.5" r="1.5" />
                    </Styled.Icon>
                }
            </Styled.ClickTarget>
        </button>
    )
    
}