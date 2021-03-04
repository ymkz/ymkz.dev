import style from '~/styles/components/profile.module.css'

export function Profile() {
  return (
    <div>
      <div>
        I'm Kazuya Yamashita. a.k.a ymkz.
        <br />
        24y/o, based in Tokyo, Japan.
        <br />
        Working as a web engineer, good at web frontend.
      </div>
      <ul className={style.list}>
        <li className={style.tag}>React</li>
        <li className={style.tag}>TypeScript</li>
        <li className={style.tag}>Node.js</li>
        <li className={style.tag}>Next.js</li>
        <li className={style.tag}>React Native</li>
        <li className={style.tag}>Redux</li>
        <li className={style.tag}>Webpack</li>
        <li className={style.tag}>Snowpack</li>
        <li className={style.tag}>HTML5</li>
        <li className={style.tag}>CSS3</li>
      </ul>
    </div>
  )
}
