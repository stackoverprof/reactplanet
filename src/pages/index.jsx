import React from 'react'
import { css } from '@emotion/react'

import Desc from '@components/molecular/Desc'

const Home = () => {

    return (
        <div css={style}>
            <h1 className="text-red-500">Hello World</h1>
            <Desc />
            <button>HAHA</button>
        </div>
    )
}

const style = css`
    button {
        background: pink;
    }
`

export default Home