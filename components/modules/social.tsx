import React from 'react'
import { SectionContainer } from '~/components/abstracts/section-container'
import { FlexRow } from '~/components/elements/flex-row'
import { IconLink } from '~/components/elements/icon-link'
import { SectionTitle } from '~/components/elements/section-title'

export const Social = () => {
  return (
    <SectionContainer id="social">
      <SectionTitle>Social</SectionTitle>
      <FlexRow space={24}>
        <IconLink
          label="external link for github"
          href="https://github.com/ymkz"
          src={require('~/static/images/github.svg?include')}
        />
        <IconLink
          label="external link for twitter"
          href="https://twitter.com/ymkzly"
          src={require('~/static/images/twitter.svg?include')}
        />
        <IconLink
          label="external link for facebook"
          href="https://facebook.com/ymkzly"
          src={require('~/static/images/facebook.svg?include')}
        />
      </FlexRow>
    </SectionContainer>
  )
}
