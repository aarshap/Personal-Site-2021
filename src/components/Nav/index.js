import React from "react"
import * as Styled from "./styled"
import { Link } from "gatsby"
import ThemeSwitcher from "./themeSwitcher"

export default () => {
    return (
        <>
            <Styled.Bar position="left">
                <Link to="/">
                    <Styled.ClickTarget>
                        <Styled.Logo xmlns="http://www.w3.org/2000/svg">
                            <Styled.LogoText d="M.565 18h3.936l.432-3.24h3.288L8.653 18h3.912L9.733 0H3.397L.565 18Zm4.824-6.6 1.2-8.808L7.765 11.4H5.39ZM20.984 18h3.888V9.864c0-2.976-2.616-4.104-5.472-4.104-2.88 0-5.688 1.224-5.688 4.416h3.84c0-1.032.552-1.608 1.656-1.608.936 0 1.584.432 1.584 1.224 0 2.28-7.44.048-7.44 5.016 0 2.352 1.92 3.432 3.816 3.432 1.68 0 3.072-.624 3.816-2.136V18Zm-3.648-3.576c0-1.272 2.16-1.032 3.528-1.752v.72c0 1.392-.96 2.112-2.208 2.112-.72 0-1.32-.36-1.32-1.08ZM31.155 12c0-1.536 1.008-2.4 2.784-2.4.48 0 .912.072 1.248.192V5.808c-.144-.048-.384-.048-.6-.048-1.656 0-2.952.888-3.672 2.496V6h-3.84v12h4.08v-6Z" />
                            <Styled.LogoDot cx="37" cy="15" r="3" />
                        </Styled.Logo>
                    </Styled.ClickTarget>
                </Link>
                <button>
                    <Styled.ClickTarget rotate="270">
                        <p>Work</p>
                    </Styled.ClickTarget>
                </button>
                <ThemeSwitcher />
            </Styled.Bar>
            <Styled.Bar position="right">
                <button>
                    <Styled.ClickTarget>
                        <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                            <Styled.Path d="M9.42 21.377 8 19.956 19.957 8 32 20.043l-1.417 1.417-9.62-9.62L20.959 32h-2.005l.003-20.162-9.538 9.539Z" />
                        </Styled.Icon>
                    </Styled.ClickTarget>
                </button>
                <button>
                    <Styled.ClickTarget rotate="90">
                        <p>Info</p>
                    </Styled.ClickTarget>
                </button>
                <button>
                    <Styled.ClickTarget>
                        <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                            <Styled.Path d="M20 34c7.732 0 14-6.268 14-14S27.732 6 20 6 6 12.268 6 20s6.268 14 14 14Zm0 2c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16Z" />
                            <Styled.Path d="M23.868 30.42C25.15 27.855 26 24.174 26 20s-.85-7.856-2.132-10.42C22.527 6.899 21.044 6 20 6s-2.527.898-3.868 3.58C14.85 12.145 14 15.826 14 20s.85 7.856 2.132 10.42C17.473 33.101 18.956 34 20 34s2.527-.898 3.868-3.58ZM20 36c4.418 0 8-7.163 8-16S24.418 4 20 4s-8 7.163-8 16 3.582 16 8 16Z" />
                            <Styled.Path d="M9.58 23.868C12.145 25.15 15.826 26 20 26s7.856-.85 10.42-2.132C33.101 22.527 34 21.044 34 20s-.898-2.527-3.58-3.868C27.855 14.85 24.174 14 20 14s-7.856.85-10.42 2.132C6.899 17.473 6 18.956 6 20s.898 2.527 3.58 3.868ZM4 20c0 4.418 7.163 8 16 8s16-3.582 16-8-7.163-8-16-8-16 3.582-16 8Z" />
                            <Styled.Path d="M4 19h32v2H4z"/>
                            <Styled.Path d="M21 4v32h-2V4z"/>
                        </Styled.Icon>
                    </Styled.ClickTarget>
                </button>
            </Styled.Bar>
        </>
    )
}