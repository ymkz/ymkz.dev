import { Fragment, h } from 'preact'

import { Facebook } from '~/components/icon-facebook'
import { GitHub } from '~/components/icon-github'
import { LinkedIn } from '~/components/icon-linkedin'
import { Twitter } from '~/components/icon-twitter'
import { LinkExtern } from '~/components/link-extern'

export const Social = () => {
  return (
    <Fragment>
      <p className="paragraph">
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </p>
      <ul className="list-row">
        <Twitter />
        <li className="list-row__item">
          <LinkExtern href="https://twitter.com/ymkzly">Twitter</LinkExtern>
        </li>
        <Facebook />
        <li className="list-row__item">
          <LinkExtern href="https://facebook.com/ymkzly">Facebook</LinkExtern>
        </li>
        <GitHub />
        <li className="list-row__item">
          <LinkExtern href="https://github.com/ymkz">GitHub</LinkExtern>
        </li>
        <LinkedIn />
        <li className="list-row__item">
          <LinkExtern href="https://linkedin.com/in/ymkz">LinkedIn</LinkExtern>
        </li>
      </ul>
    </Fragment>
  )
}
