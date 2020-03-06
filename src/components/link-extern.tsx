import { FunctionComponent, h } from 'preact'

type Props = {
  href: string
}

export const LinkExtern: FunctionComponent<Props> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="anchor">
      {children}
    </a>
  )
}
