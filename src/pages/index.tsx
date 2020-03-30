import React from 'react'

import { Facebook } from '../components/icon-facebook'
import { GitHub } from '../components/icon-github'
import { LinkedIn } from '../components/icon-linkedin'
import { Twitter } from '../components/icon-twitter'
import { Wind } from '../components/icon-wind'
import { LinkExtern } from '../components/link-extern'
import style from '../styles/index.module.scss'

const Index = () => {
  return (
    <React.Fragment>
      <h1 className={style.motto}>
        Catch
        <br />
        the
        <br />
        wind.
      </h1>
      <div className={style.totem}>
        <span>[&nbsp;</span>
        <Wind />
        <span>&nbsp;]</span>
      </div>
      <p className={style.paragraph}>
        I&apos;m Kazuya Yamashita. a.k.a ymkz.
        <br />
        24y/o, based in Tokyo, Japan.
        <br />
        Working as a frontend engineer.
      </p>
      <ul className={style.listRow}>
        <li className={style.listRowItem}>React</li>
        <li className={style.listRowItem}>TypeScript</li>
        <li className={style.listRowItem}>Node.js</li>
        <li className={style.listRowItem}>Next.js</li>
        <li className={style.listRowItem}>React Native</li>
        <li className={style.listRowItem}>Redux</li>
        <li className={style.listRowItem}>Webpack</li>
        <li className={style.listRowItem}>HTML5</li>
        <li className={style.listRowItem}>CSS3</li>
      </ul>
      <p className={style.paragraph}>
        Majored in computer science, studied human-computer interaction with face/eye tracking.
      </p>
      <ul className={style.listColumn}>
        <li className={style.listColumnItem}>Shimane University</li>
        <li className={style.listColumnItem}>Bachelor: 2014.4 - 2018.3</li>
        <li className={style.listColumnItem}>Master: 2018.4 - 2020.3</li>
      </ul>
      <p className={style.paragraph}>
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </p>
      <ul className={style.listRow}>
        <li className={style.listRowBadge}>
          <div className={style.listRowBadgeIcon}>
            <Twitter />
          </div>
          <LinkExtern className={style.anchor} href="https://twitter.com/ymkzly">
            Twitter
          </LinkExtern>
        </li>
        <li className={style.listRowBadge}>
          <div className={style.listRowBadgeIcon}>
            <Facebook />
          </div>
          <LinkExtern className={style.anchor} href="https://facebook.com/ymkzly">
            Facebook
          </LinkExtern>
        </li>
        <li className={style.listRowBadge}>
          <div className={style.listRowBadgeIcon}>
            <GitHub />
          </div>
          <LinkExtern className={style.anchor} href="https://github.com/ymkz">
            GitHub
          </LinkExtern>
        </li>
        <li className={style.listRowBadge}>
          <div className={style.listRowBadgeIcon}>
            <LinkedIn />
          </div>
          <LinkExtern className={style.anchor} href="https://linkedin.com/in/ymkz">
            LinkedIn
          </LinkExtern>
        </li>
      </ul>
      <p className={style.paragraph}>
        I Like Padding, Sci-Fi, FPS Games.
        <br />
        Play games seriously with fun.
      </p>
      <ul className={style.listColumn}>
        <li className={style.listColumnItem}>ARIA(天野こずえ)</li>
        <li className={style.listColumnItem}>ハーモニー(伊藤計劃)</li>
        <li className={style.listColumnItem}>CS:GO</li>
        <li className={style.listColumnItem}>Overwatch</li>
        <li className={style.listColumnItem}>PUBG</li>
      </ul>
    </React.Fragment>
  )
}

export default Index
