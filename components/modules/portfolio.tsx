import React from 'react'
import { SectionContainer } from '~/components/abstracts/section-container'
import { FlexRow } from '~/components/elements/flex-row'
import { SectionTitle } from '~/components/elements/section-title'
import { ProductDescription } from '~/components/elements/product-description'
import { ProductImage } from '~/components/elements/product-image'
import { ProductLink } from '~/components/elements/product-link'
import { ProductStory } from '~/components/elements/product-story'
import { ProductSupply } from '~/components/elements/product-supply'
import { Sentence } from '~/components/elements/sentence'
import portfolio1 from '~/static/images/portfolio-1.jpg?resize'
import portfolio2 from '~/static/images/portfolio-2.jpg?resize'

export const Portfolio = () => {
  return (
    <SectionContainer id="portfolio">
      <SectionTitle>Portfolio</SectionTitle>
      <ProductDescription>ymkz&apos;s portfolio site</ProductDescription>
      <ProductStory>
        <Sentence>
          このサイトであるPortfolioは自分についてや作ってきたものをまとめるために作成しました。
        </Sentence>
        <Sentence>
          TypeScriptで記述したNext.js/Reactを用いて作成し、Next.jsのSSRモードでビルドしてnow.shからデプロイしています。
        </Sentence>
        <Sentence>
          next-offlineを用いたService
          Workerの導入や、next-optimized-imagesによる画像サイズの最適化などウェブサイトのパフォーマンスを意識して開発を行いました。
        </Sentence>
      </ProductStory>
      <ProductSupply>
        <ProductLink href="https://ymkz.co">Website - ymkz.co</ProductLink>
        <ProductLink href="https://github.com/ymkz/ymkz.co">
          Repository - GitHub(ymkz/ymkz.co)
        </ProductLink>
      </ProductSupply>
      <FlexRow space={16}>
        <ProductImage {...portfolio1} />
        <ProductImage {...portfolio2} />
      </FlexRow>
    </SectionContainer>
  )
}
