import { Facebook, GitHub, LinkedIn, Twitter } from '~/components/elements/icon'
import { ExternalBlockLink } from '~/components/elements/link'

export function Social() {
  return (
    <section className="section">
      <p>
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </p>
      <ul className="list-row">
        <li>
          <ExternalBlockLink className="list-row-badge__item" href="https://github.com/ymkz">
            <div className="list-row-badge__icon">
              <GitHub />
            </div>
            <div className="list-row-badge__name">GitHub</div>
          </ExternalBlockLink>
        </li>
        <li>
          <ExternalBlockLink className="list-row-badge__item" href="https://twitter.com/ymkzly">
            <div className="list-row-badge__icon">
              <Twitter />
            </div>
            <div className="list-row-badge__name">Twitter</div>
          </ExternalBlockLink>
        </li>
        <li>
          <ExternalBlockLink className="list-row-badge__item" href="https://facebook.com/ymkzly">
            <div className="list-row-badge__icon">
              <Facebook />
            </div>
            <div className="list-row-badge__name">Facebook</div>
          </ExternalBlockLink>
        </li>
        <li>
          <ExternalBlockLink className="list-row-badge__item" href="https://linkedin.com/in/ymkz">
            <div className="list-row-badge__icon">
              <LinkedIn />
            </div>
            <div className="list-row-badge__name">LinkedIn</div>
          </ExternalBlockLink>
        </li>
      </ul>
    </section>
  )
}
