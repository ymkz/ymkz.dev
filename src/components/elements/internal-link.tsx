import Link, { LinkProps } from 'next/link'
import { FC } from 'react'

export const InternalLink: FC<LinkProps> = ({ children, href }) => {
  return (
    <>
      <Link href={href}>
        <a className="root">{children}</a>
      </Link>
      <style jsx>{`
        .root {
          color: var(--color-primary);
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
