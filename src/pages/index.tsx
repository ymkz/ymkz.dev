import { NextSeo } from 'next-seo'
import { Education } from '~/components/modules/education'
import { Hobby } from '~/components/modules/hobby'
import { Motto } from '~/components/modules/motto'
import { Profile } from '~/components/modules/profile'
import { Social } from '~/components/modules/social'
import { Totem } from '~/components/modules/totem'

function Index() {
  return (
    <>
      <NextSeo title="Portfolio" />
      <Motto />
      <Totem />
      <Profile />
      <Education />
      <Social />
      <Hobby />
    </>
  )
}

export default Index
