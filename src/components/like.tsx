import style from '~/styles/components/like.module.css'

export function Like() {
  return (
    <div>
      <div>
        I Like Sleeping, Walking, Padding, Sci-Fi, FPS Games.
        <br />
        Play games seriously with fun.
      </div>
      <ul className={style.list}>
        <li>ARIA</li>
        <li>Harmony</li>
        <li>Overwatch</li>
        <li>PUBG</li>
      </ul>
    </div>
  )
}
