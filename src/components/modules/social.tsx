import { Facebook, GitHub, LinkedIn, Twitter } from '~/components/elements/icon'
import { ExternalInlineLink } from '~/components/elements/link'

export function Social() {
  return (
    <section className="section">
      <p>
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </p>
      <ul className="list-row">
        <li className="list-row-badge__item">
          <div className="list-row-badge__icon">
            <GitHub />
          </div>
          <ExternalInlineLink className="list-row-badge__name" href="https://github.com/ymkz">
            GitHub
          </ExternalInlineLink>
        </li>
        <li className="list-row-badge__item">
          <div className="list-row-badge__icon">
            <Twitter />
          </div>
          <ExternalInlineLink className="list-row-badge__name" href="https://twitter.com/ymkzly">
            Twitter
          </ExternalInlineLink>
        </li>
        <li className="list-row-badge__item">
          <div className="list-row-badge__icon">
            <Facebook />
          </div>
          <ExternalInlineLink className="list-row-badge__name" href="https://facebook.com/ymkzly">
            Facebook
          </ExternalInlineLink>
        </li>
        <li className="list-row-badge__item">
          <div className="list-row-badge__icon">
            <LinkedIn />
          </div>
          <ExternalInlineLink className="list-row-badge__name" href="https://linkedin.com/in/ymkz">
            LinkedIn
          </ExternalInlineLink>
        </li>
      </ul>
    </section>
  )
}
