import { Fragment, h } from 'preact'

export const Education = () => {
  return (
    <Fragment>
      <p className="paragraph">
        Majored in computer science, studying Human-Computer Interaction with face/eye tracking.
      </p>
      <ul className="list-column">
        <li className="list-column__item">Shimane University</li>
        <li className="list-column__item">Bachelor: 2014.4 - 2018.3</li>
        <li className="list-column__item">Master: 2018.4 - 2020.3</li>
      </ul>
    </Fragment>
  )
}
