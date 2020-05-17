import { GetStaticProps, NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'

import { Facebook } from '../components/icon-facebook'
import { GitHub } from '../components/icon-github'
import { LinkedIn } from '../components/icon-linkedin'
import { Twitter } from '../components/icon-twitter'
import { Wind } from '../components/icon-wind'
import { LinkExtern } from '../components/link-extern'
import { getPosts } from '../utils/get-posts'

type Props = {
  posts: {
    frontmatter: Frontmatter
    slug: string
  }[]
}

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <React.Fragment>
      <h1 className="motto">
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
        24y/o, based in Tokyo, Japan.
        <br />
        Working as a frontend engineer.
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
      <p className="paragraph">
        Majored in computer science, studied human-computer interaction with face/eye tracking.
        <br />
        Master of Engineering.
      </p>
      <ul className="list-column">
        <li className="list-column__item">Shimane University</li>
        <li className="list-column__item">Bachelor: 2014.4 - 2018.3</li>
        <li className="list-column__item">Master: 2018.4 - 2020.3</li>
      </ul>
      <p className="paragraph">
        Social account is here, get in touch with me.
        <br />
        Twitter DM is open.
      </p>
      <ul className="list-row">
        <li className="list-row__badge">
          <div className="list-row__badge--icon">
            <Twitter />
          </div>
          <LinkExtern className="anchor" href="https://twitter.com/ymkzly">
            Twitter
          </LinkExtern>
        </li>
        <li className="list-row__badge">
          <div className="list-row__badge--icon">
            <Facebook />
          </div>
          <LinkExtern className="anchor" href="https://facebook.com/ymkzly">
            Facebook
          </LinkExtern>
        </li>
        <li className="list-row__badge">
          <div className="list-row__badge--icon">
            <GitHub />
          </div>
          <LinkExtern className="anchor" href="https://github.com/ymkz">
            GitHub
          </LinkExtern>
        </li>
        <li className="list-row__badge">
          <div className="list-row__badge--icon">
            <LinkedIn />
          </div>
          <LinkExtern className="anchor" href="https://linkedin.com/in/ymkz">
            LinkedIn
          </LinkExtern>
        </li>
      </ul>
      <p className="paragraph">
        I Like Padding, Sci-Fi, FPS Games.
        <br />
        Play games seriously with fun.
      </p>
      <ul className="list-column">
        <li className="list-column__item">ARIA(天野こずえ)</li>
        <li className="list-column__item">ハーモニー(伊藤計劃)</li>
        <li className="list-column__item">CS:GO</li>
        <li className="list-column__item">Overwatch</li>
        <li className="list-column__item">PUBG</li>
      </ul>
      <p className="post-heading">Posts</p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <NextLink href="/post/[slug]" as={`/post/${post.slug}`}>
              <a className="post-link">{post.frontmatter.title}</a>
            </NextLink>
            <div className="date">
              {post.frontmatter.createdAt}に投稿
              {post.frontmatter.updatedAt && <React.Fragment>（{post.frontmatter.updatedAt}に改稿）</React.Fragment>}
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts(require.context('../contents', true, /\.md$/))
  return { props: { posts } }
}
