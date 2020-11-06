import { InternalInlineLink } from '~/components/elements/link'

export function Profile() {
  return (
    <section className="section">
      <p>
        I'm Kazuya Yamashita. a.k.a ymkz.
        <br />
        24y/o, based in Tokyo, Japan.
        <br />
        Working as a web engineer, good at web frontend.
        <br />
        My posts are published at <InternalInlineLink href="/post">/post</InternalInlineLink>.
      </p>
      <ul className="list-row">
        <li className="list-row__item">React</li>
        <li className="list-row__item">TypeScript</li>
        <li className="list-row__item">Node.js</li>
        <li className="list-row__item">Next.js</li>
        <li className="list-row__item">React Native</li>
        <li className="list-row__item">Redux</li>
        <li className="list-row__item">Webpack</li>
        <li className="list-row__item">HTML5</li>
        <li className="list-row__item">CSS3</li>
      </ul>
    </section>
  )
}
