import React, { useEffect, useState } from "react"
import * as Styled from "./styled"
import { Link } from "gatsby"
import { media } from "../../styles/MediaQueries"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@react-hook/media-query"
import ThemeSwitcher from "./themeSwitcher"
import Menu from "../NavMenu"

export default () => {

    // Nav bar states

    const [showShadow, setShowShadow] = useState(false)

    // Menu states

    const [menuOpen, setMenuOpen] = useState(false)

    // Toggle menu visibility

    const toggleMenu = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    // Hide/show shadow on mobile nav bar

    useEffect(() => {

        const toggleShadow = () => {
            window.scrollY >= 10 ? setShowShadow(true) : setShowShadow(false)
        }

        window.addEventListener("scroll", toggleShadow)
        
    })

    // Disable body scrolling while menu is open
    
    menuOpen
        ? document.body.style.overflow = "hidden"
        : document.body.style.overflow = "visible"

    // Scroll to top

    const scrollToTop = () => { 
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth'
        })
    }

    // Scroll to bottom

    const scrollToBottom = () => { 
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'smooth'
        })
    }
    
    // Framer motion variants

    const CloseIconVariants = {
        hidden: {
            opacity: 0,
            rotate: 90
        },
        visible: {
            opacity: 1,
            rotate: 0,
        }
    }

    // Media query hook

    const isMd = useMediaQuery(media.md)

    return (
        <>
            <AnimatePresence>
                { menuOpen && <Menu closeMenu={closeMenu} /> }
            </AnimatePresence>

            <Styled.Bar position="primary" showShadow={showShadow}>
                <Styled.LogoWrapper>
                    <Link to="/">
                        <Styled.ClickTarget>
                            { !menuOpen &&
                                <Styled.Logo xmlns="http://www.w3.org/2000/svg">
                                    <Styled.Path d="M.565 18h3.936l.432-3.24h3.288L8.653 18h3.912L9.733 0H3.397L.565 18Zm4.824-6.6 1.2-8.808L7.765 11.4H5.39ZM20.984 18h3.888V9.864c0-2.976-2.616-4.104-5.472-4.104-2.88 0-5.688 1.224-5.688 4.416h3.84c0-1.032.552-1.608 1.656-1.608.936 0 1.584.432 1.584 1.224 0 2.28-7.44.048-7.44 5.016 0 2.352 1.92 3.432 3.816 3.432 1.68 0 3.072-.624 3.816-2.136V18Zm-3.648-3.576c0-1.272 2.16-1.032 3.528-1.752v.72c0 1.392-.96 2.112-2.208 2.112-.72 0-1.32-.36-1.32-1.08ZM31.155 12c0-1.536 1.008-2.4 2.784-2.4.48 0 .912.072 1.248.192V5.808c-.144-.048-.384-.048-.6-.048-1.656 0-2.952.888-3.672 2.496V6h-3.84v12h4.08v-6Z" />
                                    <Styled.BrandCircle cx="37" cy="15" r="3" />
                                </Styled.Logo>
                            }
                        </Styled.ClickTarget>
                    </Link>
                </Styled.LogoWrapper>
                <Styled.WorkWrapper>
                    <button onClick={() => toggleMenu()}>
                        <Styled.ClickTarget rotate="270">
                            { menuOpen
                                ?
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={CloseIconVariants}
                                    >
                                        <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                                            <Styled.Path d="M29.795 32 32 29.795 22.205 20 32 10.205 29.795 8 20 17.795 10.205 8 8 10.205 17.795 20 8 29.795 10.205 32 20 22.205 29.795 32Z" />
                                        </Styled.Icon>
                                    </motion.div>
                                :
                                    <>
                                        {isMd
                                            ? <h3>Work</h3>
                                            :
                                                <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                                                    <Styled.Path d="M4 12h32v3H4zM4 24h32v3H4z" />
                                                </Styled.Icon>
                                        }
                                    </>
                            }
                        </Styled.ClickTarget>
                    </button>
                </Styled.WorkWrapper>
                <Styled.ThemeWrapper>
                    { <ThemeSwitcher menuOpen={menuOpen} /> }
                </Styled.ThemeWrapper>
            </Styled.Bar>
            <Styled.Bar position="secondary">
                <div>
                    <button onClick={() => scrollToTop()}>
                        <Styled.ClickTarget>
                            { !menuOpen &&
                                <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                                    <Styled.Path d="m32 19.808-2.15 2.121-8.35-8.241V32h-3V13.758L10.15 22 8 19.879 20.036 8 32 19.808Z" />
                                </Styled.Icon>
                            }
                        </Styled.ClickTarget>
                    </button>
                </div>
                <div>
                    <Link to="/info">
                        <Styled.ClickTarget rotate="90">
                            { !menuOpen &&
                                <h3>Info</h3>
                            }
                        </Styled.ClickTarget>
                    </Link>
                </div>
                <div>
                    <button onClick={() => scrollToBottom()}>
                        <Styled.ClickTarget>
                            { !menuOpen &&
                                <Styled.Icon xmlns="http://www.w3.org/2000/svg">
                                    <Styled.Path fill-rule="evenodd" clip-rule="evenodd" d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4h-.003C11.162 4.001 4 11.164 4 20c0 8.837 7.163 16 16 16Zm-1.5-14.5v10.985c-.702-.462-1.485-1.283-2.25-2.642-1.162-2.067-2.01-4.976-2.206-8.343H18.5Zm3 0v10.985c.702-.462 1.485-1.283 2.25-2.642 1.162-2.067 2.01-4.976 2.206-8.343H21.5Zm4.456-3H21.5V7.515c.702.462 1.485 1.283 2.25 2.642 1.162 2.067 2.01 4.976 2.206 8.343Zm3.005 3c-.2 3.838-1.164 7.282-2.617 9.85a13.005 13.005 0 0 0 6.57-9.85h-3.953Zm3.953-3h-3.953c-.2-3.838-1.164-7.282-2.617-9.85a13.005 13.005 0 0 1 6.57 9.85Zm-14.414 0h-4.456c.196-3.367 1.044-6.276 2.207-8.343.764-1.359 1.547-2.18 2.249-2.642V18.5Zm-7.461 0c.2-3.838 1.164-7.282 2.617-9.85a13.006 13.006 0 0 0-6.57 9.85h3.953Zm-3.953 3a13.006 13.006 0 0 0 6.57 9.85c-1.453-2.568-2.416-6.012-2.617-9.85H7.086Z" />
                                </Styled.Icon>
                            }
                        </Styled.ClickTarget>
                    </button>
                </div>
            </Styled.Bar>
        </>
    )
}