import { Fragment, h } from 'preact'

export const Personality = () => {
  return (
    <Fragment>
      <p className="paragraph">
        I Like Padding, Sci-Fi, FPS Games.
        <br />
        Play games seriously with fun.
      </p>
      <ul className="list-column">
        <li className="list-column__item">ARIA(天野こずえ)</li>
        <li className="list-column__item">ハーモニー(伊藤計劃)</li>
        <li className="list-column__item">Overwatch</li>
        <li className="list-column__item">PUBG</li>
      </ul>
    </Fragment>
  )
}
