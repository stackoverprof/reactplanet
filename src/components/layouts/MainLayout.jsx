import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import { Helmet } from "react-helmet"

// import Navbar from '@components/molecular/Navbar'
import Footer from '@components/molecular/Footer'

const MainLayout = ({className, title, css: style, children, noClearance}) => {
    const [navHeight, setNavHeight] = useState(0)
    const navRef = useRef(null)

    useEffect(() => {
        setNavHeight(navRef.current.firstChild.offsetHeight)
    }, [])

    return (
        <div css={layer({navHeight, noClearance})} ref={navRef}>
            <Helmet>
                <title>WWGM 2021 {title ? `— ${title}` : ''}</title>
            </Helmet>
            
            {/* <Navbar /> */}
            <main css={style} className={className}>
                {children}
            </main>
            <Footer />

        </div>
    )
}

const layer = ({navHeight, noClearance}) => css`
    /* padding-top: ${noClearance ? 0 : navHeight}px; */
    height: 100%;

    .dimm-layer{
        background: #000c;
        z-index: 50;
    }

    main {
        padding-bottom: 54px;
    }
`

export default MainLayout