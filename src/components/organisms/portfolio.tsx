import React from 'react'

import { ProjectDescription } from '~/components/molecules/project-description'
import { ProjectImage } from '~/components/molecules/project-image'
import { ProjectLink } from '~/components/molecules/project-link'
import { ProjectList } from '~/components/molecules/project-list'
import { ProjectSection } from '~/components/molecules/project-section'
import { ProjectText } from '~/components/molecules/project-text'
import { ProjectTitle } from '~/components/molecules/project-title'

export const Portfolio = () => {
  return (
    <ProjectSection>
      <ProjectTitle>Portfolio</ProjectTitle>
      <ProjectDescription>ymkz&apos;s portfolio site</ProjectDescription>
      <ProjectText>
        このサイトはポートフォリオとして自分についてやこれまでに作ってきたものをまとめるために開発しました。
        <br />
        TypeScriptで記述したNext.js/Reactを用いて作成し、Next.jsのSSRモードでビルドしてnow.shからデプロイしています。
        <br />
        next-offlineを用いたService
        Workerの導入や、next-optimized-imagesによる画像の最適化などウェブサイトのパフォーマンスを意識して開発を行いました。
      </ProjectText>
      <ProjectList>
        <li>
          <ProjectLink href="https://ymkz.co">Website - ymkz.co</ProjectLink>
        </li>
        <li>
          <ProjectLink href="https://github.com/ymkz/ymkz.co">
            Repository - ymkz/ymkz.co
          </ProjectLink>
        </li>
      </ProjectList>
      <ProjectImage src="/images/portfolio.png" />
    </ProjectSection>
  )
}
