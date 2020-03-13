import { Fragment, h } from 'preact'

import { Wind } from '~/components/icon-wind'

export const Profile = () => {
  return (
    <Fragment>
      <h1 className="title">
        Catch
        <br />
        the
        <br />
        wind.
      </h1>
      <div className="totem">
        <span>[&nbsp;</span>
        <Wind />
        <span>&nbsp;]</span>
      </div>
      <p className="paragraph">
        I&apos;m Kazuya Yamashita. a.k.a ymkz.
        <br />
        23y/o, based in Matsue at Shimane prefecture in Japan.
        <br />
        Working as a frontend engineer.
      </p>
    </Fragment>
  )
}
