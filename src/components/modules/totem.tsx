import { Wind } from '~/components/elements/icon'

export const Totem = () => {
  return (
    <div className="root">
      <div className="left"></div>
      <Wind />
      <div className="right"></div>
      <style jsx>{`
        .root {
          margin-top: 48px;
          display: flex;
          align-items: center;
        }
        .left {
          width: 4px;
          height: 22px;
          margin-right: 8px;
          border-left: 1.5px solid var(--color-primary);
          border-top: 1.5px solid var(--color-primary);
          border-bottom: 1.5px solid var(--color-primary);
        }
        .right {
          width: 4px;
          height: 22px;
          margin-left: 8px;
          border-right: 1.5px solid var(--color-primary);
          border-top: 1.5px solid var(--color-primary);
          border-bottom: 1.5px solid var(--color-primary);
        }
      `}</style>
    </div>
  )
}
