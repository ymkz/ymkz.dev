import { css } from '@emotion/react'
import { Avatar } from '../components/avatar'
import { Icon } from '../components/icon'
import { color } from '../constants/color'

export const Social = () => {
  return (
    <footer css={container}>
      <Avatar />
      <div css={icons}>
        <a
          css={link}
          href="https://github.com/ymkz"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="github icon link"
        >
          <Icon name="github" width={32} height={32} />
        </a>
        <a
          css={link}
          href="https://twitter.com/ymkzly"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="twitter icon link"
        >
          <Icon name="twitter" width={32} height={32} />
        </a>
        <a
          css={link}
          href="https://facebook.com/ymkzly"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="facebook icon link"
        >
          <Icon name="facebook" width={32} height={32} />
        </a>
      </div>
    </footer>
  )
}

const container = css`
  display: flex;
  gap: 72px;
  align-items: center;
`

const icons = css`
  display: flex;
  gap: 24px;
  align-items: center;
`

const link = css`
  line-height: 0;
  color: ${color.baseWhite};
`
