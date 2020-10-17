import { BadgeShape } from '~/types'

type Props = {
  items: BadgeShape[]
}

export const ListRowBadge = ({ items }: Props) => {
  return (
    <ul className="root">
      {items.map((item) => (
        <li key={item.name} className="item">
          <a className="href" target="_blank" rel="noopener noreferrer" href={item.href}>
            <div className="icon">{item.icon}</div>
            <div className="name">{item.name}</div>
          </a>
        </li>
      ))}
      <style jsx>{`
        .root {
          align-items: center;
          flex-flow: row wrap;
          display: flex;
          margin-top: 8px;
        }
        .item {
          font-family: var(--pretty-font);
          height: 32px;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          margin-top: 8px;
        }
        .item:not(:last-child) {
          margin-right: 8px;
        }
        .href {
          color: var(--color-primary);
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .icon {
          background-color: var(--color-primary);
          color: var(--bg-color-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
        }
        .name {
          font-family: var(--pretty-font);
          padding: 0 8px;
          border-top: 2px solid var(--color-primary);
          border-right: 2px solid var(--color-primary);
          border-bottom: 2px solid var(--color-primary);
          height: 32px;
          line-height: 28px;
          display: flex;
          align-items: center;
        }
      `}</style>
    </ul>
  )
}
