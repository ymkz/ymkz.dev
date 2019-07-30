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
            left: 50%;
            position: fixed;
            top: 50%;
            transform: translate(-50%, -50%);
            width: fit-content;
          }
        `}
      >
        <h1
          css={css`
            background-color: var(--base-background);
            color: var(--base-text);
            font-family: 'Nunito Sans', sans-serif;
            font-size: 6.6rem;
            font-weight: 900;
            line-height: 1;
            ${up('mobile')} {
              font-size: 7.7rem;
            }
          `}
        >
          Hi, I&apos;m ymkz
        </h1>
        <h2
          css={css`
            font-family: 'Nunito Sans', sans-serif;
            font-size: 1.4rem;
            font-weight: 300;
            margin-top: 1rem;
            ${up('mobile')} {
              margin-top: 0.5rem;
              width: fit-content;
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
