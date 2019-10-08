import React from 'react'

import { SectionContainer } from '~/components/abstracts/section-container'
import { ProductDescription } from '~/components/elements/product-description'
import { ProductLink } from '~/components/elements/product-link'
import { ProductStory } from '~/components/elements/product-story'
import { ProductSupply } from '~/components/elements/product-supply'
import { SectionTitle } from '~/components/elements/section-title'
import { Sentence } from '~/components/elements/sentence'

export const FrontendBoilerplate = () => {
  return (
    <SectionContainer id="frontend-boilerplate">
      <SectionTitle>frontend-boilerplate</SectionTitle>
      <ProductDescription>A boilerplate for frontend development</ProductDescription>
      <ProductStory>
        <Sentence>Frontendのモダンなスタックで構成されたBoilerplateです。</Sentence>
        <Sentence>
          既存のBoilerplateを用いずに自分なりのBoilerplateをゼロベースで作成しています。TypeScriptで記述し、ビルドはwebpack、React+Reduxな開発環境です。Reduxはredux-observableを用いて非同期処理まわりをepicにまとめています。
        </Sentence>
      </ProductStory>
      <ProductSupply>
        <ProductLink href="https://frontend-boilerplate.now.sh">
          Website - frontend-boilerplate
        </ProductLink>
        <ProductLink href="https://github.com/ymkz/frontend-boilerplate">
          Repository - GitHub(ymkz/frontend-boilerplate)
        </ProductLink>
      </ProductSupply>
    </SectionContainer>
  )
}
