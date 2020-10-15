type Props = {
  name: string
  href: string
  icon: JSX.Element
}

export const Badge = ({ name, href, icon }: Props) => {
  return (
    <li className="list-row__badge">
      <a className="list-row__anchor" target="_blank" rel="noopener noreferrer" href={href}>
        <div className="list-row__icon">{icon}</div>
        <div className="list-row__text">{name}</div>
      </a>
    </li>
  )
}
