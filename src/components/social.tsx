import { css } from 'solid-styled-components'
import { Avatar } from '../components/avatar'
import { Icon } from '../components/icon'
import { color } from '../constants/color'

export const Social = () => {
  return (
    <footer class={container}>
      <Avatar />
      <div class={icons}>
        <a
          class={link}
          href="https://github.com/ymkz"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="github icon link"
        >
          <Icon name="github" />
        </a>
        <a
          class={link}
          href="https://twitter.com/ymkzly"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="twitter icon link"
        >
          <Icon name="twitter" />
        </a>
        <a
          class={link}
          href="https://facebook.com/ymkzly"
          rel="noreferrer noopener"
          target="_blank"
          aria-label="facebook icon link"
        >
          <Icon name="facebook" />
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
