import { Education } from '~/components/education'
import { Like } from '~/components/like'
import { Motto } from '~/components/motto'
import { Profile } from '~/components/profile'
import { Sign } from '~/components/sign'
import { Social } from '~/components/social'
import layout from '~/styles/pages/index.module.css'

export default function IndexPage() {
  return (
    <div className={layout.container}>
      <Motto />
      <Profile />
      <Education />
      <Social />
      <Like />
      <Sign />
    </div>
  )
}
