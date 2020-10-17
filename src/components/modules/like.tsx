import { ListColumn } from '~/components/elements/list-column'
import { Paragraph } from '~/components/elements/paragraph'
import { Section } from '~/components/elements/section'

export const Like = () => {
  return (
    <Section>
      <Paragraph>
        I Like Sleeping, Walking, Padding, Sci-Fi, FPS Games.
        <br />
        Play games seriously with fun.
      </Paragraph>
      <ListColumn items={['ARIA', 'Harmony', 'Overwatch', 'PUBG']} />
    </Section>
  )
}
