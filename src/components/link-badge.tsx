import { FunctionComponent, h } from 'preact'

type Props = {
  href: string
}

export const LinkBadge: FunctionComponent<Props> = ({ children, href }) => {
  return (
    <a className="link-badge" target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  )
}
