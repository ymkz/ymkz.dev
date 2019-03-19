import React from 'react'
import Row from '../abstracts/row'
import SectionContainer from '../abstracts/section-container'
import SectionTitle from '../elements/section-title'
import SocialLink from '../elements/social-link'

function Socials() {
  return (
    <SectionContainer>
      <SectionTitle>Socials</SectionTitle>
      <Row space={24}>
        <SocialLink
          src="/static/images/icons/github.svg"
          href="https://github.com/ymkz"
          alt="Link to GitHub"
        />
        <SocialLink
          src="/static/images/icons/twitter.svg"
          href="https://twitter.com/ymkzly"
          alt="Link to Twitter"
        />
        <SocialLink
          src="/static/images/icons/facebook.svg"
          href="https://facebook.com/ymkzly"
          alt="Link to Facebook"
        />
      </Row>
    </SectionContainer>
  )
}

export default Socials
