import React from 'react'
import Head from 'next/head'
import { css } from '@emotion/core'
import { up } from '~/helpers/breakpoints'

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home | ymkz</title>
      </Head>
      <div
        css={css`
          width: min-content;
          ${up('mobile')} {
            position: fixed;
            top: 50%;
            left: 50%;
            width: fit-content;
            transform: translate(-50%, -50%);
          }
        `}
      >
        <h1
          css={css`
            font-family: 'Nunito Sans', sans-serif;
            font-size: 6.6rem;
            font-weight: 900;
            line-height: 1;
            color: var(--base-text);
            background-color: var(--base-background);
            ${up('mobile')} {
              font-size: 7.7rem;
            }
          `}
        >
          Hi, I&apos;m ymkz
        </h1>
        <h2
          css={css`
            margin-top: 1rem;
            font-family: 'Nunito Sans', sans-serif;
            font-size: 1.4rem;
            font-weight: 300;
            ${up('mobile')} {
              width: fit-content;
              margin-top: 0.5rem;
            }
          `}
        >
          ―Play games, seriously with fun.
        </h2>
      </div>
    </React.Fragment>
  )
}

export default Home
