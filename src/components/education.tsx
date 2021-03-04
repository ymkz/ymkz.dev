import style from '~/styles/components/education.module.css'

export function Education() {
  return (
    <div>
      <div>
        Majored in computer science, studied human-computer interaction with
        face/eye tracking.
        <br />
        Master of Engineering.
      </div>
      <ul className={style.list}>
        <li>Shimane University</li>
        <li>Bachelor: 2014.4 - 2018.3</li>
        <li>Master: 2018.4 - 2020.3</li>
      </ul>
    </div>
  )
}
