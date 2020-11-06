import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

type LinkPropsWithChildren = PropsWithChildren<LinkProps> & {
  className?: string
}

export function InternalBlockLink({ href, className, children }: LinkPropsWithChildren) {
  return (
    <>
      <Link href={href}>
        <a className={clsx('anchor--block', className)}>{children}</a>
      </Link>
    </>
  )
}

export function InternalInlineLink({ href, className, children }: LinkPropsWithChildren) {
  return (
    <>
      <Link href={href}>
        <a className={clsx('anchor--inline', className)}>{children}</a>
      </Link>
    </>
  )
}

export function ExternalBlockLink({
  className,
  children,
  ...attrs
}: PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <>
      <a target="_blank" rel="noopener noreferrer" className={clsx('anchor--block', className)} {...attrs}>
        {children}
      </a>
    </>
  )
}

export function ExternalInlineLink({
  className,
  children,
  ...attrs
}: PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <>
      <a target="_blank" rel="noopener noreferrer" className={clsx('anchor--inline', className)} {...attrs}>
        {children}
      </a>
    </>
  )
}
