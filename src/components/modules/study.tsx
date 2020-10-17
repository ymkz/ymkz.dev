import { ListColumn } from '~/components/elements/list-column'
import { Paragraph } from '~/components/elements/paragraph'
import { Section } from '~/components/elements/section'

export const Study = () => {
  return (
    <Section>
      <Paragraph>
        Majored in computer science, studied human-computer interaction with face/eye tracking.
        <br />
        Master of Engineering.
      </Paragraph>
      <ListColumn items={['Shimane University', 'Bachelor: 2014.4 - 2018.3', 'Master: 2018.4 - 2020.3']} />
    </Section>
  )
}
