import React from 'react'
import { css } from '@emotion/react'

import MainLayout from '@components/layouts/MainLayout'
import Desc from '@components/molecular/Desc'

const Home = () => {

    return (
        <MainLayout css={style.page} title="Selamat datang!">
            
            <section>
                <div className="contain-size-s flex-bc">
                    <h1>HELLO WORLD</h1>
                    <Desc />
                </div>
            </section>

        </MainLayout>
    )
}

const style = {
    page: css`
        button {
            background: pink;
        }
    `
}

export default Home