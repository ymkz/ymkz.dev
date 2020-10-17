import { Facebook, GitHub, LinkedIn, Twitter } from '~/components/elements/icon'
import { ListRowBadge } from '~/components/elements/list-row-badge'
import { Paragraph } from '~/components/elements/paragraph'
import { Section } from '~/components/elements/section'
import { BadgeShape } from '~/types'

const items: BadgeShape[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/ymkz',
    icon: <GitHub />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ymkzly',
    icon: <Twitter />,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/ymkzly',
    icon: <Facebook />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/ymkz',
    icon: <LinkedIn />,
  },
]

export const Social = () => {
  return (
    <Section>
      <Paragraph>
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </Paragraph>
      <ListRowBadge items={items} />
    </Section>
  )
}
