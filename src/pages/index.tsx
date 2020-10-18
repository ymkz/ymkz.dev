import { DefaultSeo } from 'next-seo'
import { Like } from '~/components/modules/like'
import { Motto } from '~/components/modules/motto'
import { Profile } from '~/components/modules/profile'
import { Social } from '~/components/modules/social'
import { Study } from '~/components/modules/study'
import { Totem } from '~/components/modules/totem'

const Index = () => {
  return (
    <>
      <DefaultSeo title="Portfolio" />
      <Motto />
      <Totem />
      <Profile />
      <Study />
      <Social />
      <Like />
    </>
  )
}

export default Index
