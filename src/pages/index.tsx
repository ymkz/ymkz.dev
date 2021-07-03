import { css } from 'solid-styled-components'
import { Motto } from '~/components/motto'
import { Social } from '~/components/social'
import { Text } from '~/components/text'

export const IndexPage = () => {
  return (
    <div class={container}>
      <Motto />
      <Text />
      <Social />
    </div>
  )
}

const container = css`
  max-width: 1024px;
  width: 100%;
  padding: 48px 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
`
