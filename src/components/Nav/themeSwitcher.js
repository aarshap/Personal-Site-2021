import React, { useContext } from "react"
import * as Styled from "./styled"
import { ThemeContext } from "../../contexts/ThemeContext"

export default (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    // Click handler

    const handleClick = () => {
        toggleTheme()
    }

    return (
        <button onClick={() => handleClick()}>
            <Styled.ClickTarget>
                {!props.menuOpen &&
                    <>
                        {theme === "light" ?
                            <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                                <Styled.Path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 19a6.5 6.5 0 1 0 13 0h3a9.5 9.5 0 0 1-19 0h3Z" />
                                <Styled.Path d="M17 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM27 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                <Styled.Path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 0h-3v4.07a15.928 15.928 0 0 0-8.704 3.605L6.92 4.797 4.797 6.92l2.878 2.877A15.927 15.927 0 0 0 4.07 18.5H0v3h4.07a15.927 15.927 0 0 0 3.605 8.703l-2.878 2.878 2.121 2.122 2.878-2.878A15.927 15.927 0 0 0 18.5 35.93V40h3v-4.07a15.927 15.927 0 0 0 8.703-3.605l2.878 2.878 2.122-2.122-2.878-2.877A15.928 15.928 0 0 0 35.93 21.5H40v-3h-4.07a15.927 15.927 0 0 0-3.605-8.703l2.878-2.878-2.122-2.122-2.877 2.878A15.927 15.927 0 0 0 21.5 4.07V0ZM20 33c7.18 0 13-5.82 13-13S27.18 7 20 7 7 12.82 7 20s5.82 13 13 13Z" />
                            </Styled.Icon>    
                        :
                            <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                                <Styled.Path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 6.442A15.934 15.934 0 0 0 20 4C11.163 4 4 11.163 4 20s7.163 16 16 16a15.932 15.932 0 0 0 8.5-2.442 16.063 16.063 0 0 1-2.556-1.992A15.954 15.954 0 0 1 21 20c0-4.548 1.897-8.652 4.944-11.565A16.066 16.066 0 0 1 28.5 6.442Zm-5.644.872A13.057 13.057 0 0 0 20 7C12.82 7 7 12.82 7 20s5.82 13 13 13c.982 0 1.938-.108 2.856-.314A18.933 18.933 0 0 1 18 20c0-4.877 1.839-9.324 4.856-12.686Z" />
                                <Styled.Path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 19a6.5 6.5 0 1 0 13 0h3a9.5 9.5 0 0 1-19 0h3Z" />
                                <Styled.Circle cx="15" cy="15" r="2" />
                                <Styled.Circle cx="2" cy="2" r="2" />
                                <Styled.Circle cx="2" cy="34" r="2" />
                                <Styled.Circle cx="38" cy="20" r="2" />
                                <Styled.Circle cx="25" cy="15" r="2" />
                            </Styled.Icon>
                        }
                    </>
                }
            </Styled.ClickTarget>
        </button>
    )
    
}