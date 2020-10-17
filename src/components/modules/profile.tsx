import { InternalLink } from '~/components/elements/internal-link'
import { ListRow } from '~/components/elements/list-row'
import { Paragraph } from '~/components/elements/paragraph'
import { Section } from '~/components/elements/section'

export const Profile = () => {
  return (
    <Section>
      <Paragraph>
        I&apos;m Kazuya Yamashita. a.k.a ymkz.
        <br />
        24y/o, based in Tokyo, Japan.
        <br />
        Working as a web engineer, good at web frontend.
        <br />
        My posts are published at <InternalLink href="/post">/post</InternalLink> .
      </Paragraph>
      <ListRow
        items={['React', 'TypeScript', 'Node.js', 'Next.js', 'React Native', 'Redux', 'Webpack', 'HTML5', 'CSS3']}
      />
    </Section>
  )
}
