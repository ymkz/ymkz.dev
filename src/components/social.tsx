import { Badge } from '~/components/badge'
import { Facebook, GitHub, LinkedIn, Twitter } from '~/components/icon'

export const Social = () => {
  return (
    <section className="section">
      <p className="text">
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </p>
      <ul className="list-row">
        <Badge name="GitHub" href="https://github.com/ymkz" icon={<GitHub />} />
        <Badge name="Twitter" href="https://twitter.com/ymkzly" icon={<Twitter />} />
        <Badge name="Facebook" href="https://facebook.com/ymkzly" icon={<Facebook />} />
        <Badge name="LinkedIn" href="https://linkedin.com/in/ymkz" icon={<LinkedIn />} />
      </ul>
    </section>
  )
}
