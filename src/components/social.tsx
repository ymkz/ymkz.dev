import { Fragment, h } from 'preact'

import { Facebook } from '~/components/icon-facebook'
import { GitHub } from '~/components/icon-github'
import { LinkedIn } from '~/components/icon-linkedin'
import { Twitter } from '~/components/icon-twitter'
import { LinkBadge } from '~/components/link-badge'

export const Social = () => {
  return (
    <Fragment>
      <p className="paragraph">
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </p>
      <ul className="list-row">
        <li className="list-row__item--zero-padding">
          <LinkBadge href="https://twitter.com/ymkzly">
            <div className="icon-image">
              <Twitter />
            </div>
            <div className="icon-label">Twitter</div>
          </LinkBadge>
        </li>
        <li className="list-row__item--zero-padding">
          <LinkBadge href="https://facebook.com/ymkzly">
            <div className="icon-image">
              <Facebook />
            </div>
            <div className="icon-label">Facebook</div>
          </LinkBadge>
        </li>
        <li className="list-row__item--zero-padding">
          <LinkBadge href="https://github.com/ymkz">
            <div className="icon-image">
              <GitHub />
            </div>
            <div className="icon-label">GitHub</div>
          </LinkBadge>
        </li>
        <li className="list-row__item--zero-padding">
          <LinkBadge href="https://linkedin.com/in/ymkz">
            <div className="icon-image">
              <LinkedIn />
            </div>
            <div className="icon-label">LinkedIn</div>
          </LinkBadge>
        </li>
      </ul>
    </Fragment>
  )
}
