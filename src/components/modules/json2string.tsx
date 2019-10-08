import React from 'react'

import { SectionContainer } from '~/components/abstracts/section-container'
import { FlexRow } from '~/components/elements/flex-row'
import { ProductDescription } from '~/components/elements/product-description'
import { ProductImage } from '~/components/elements/product-image'
import { ProductLink } from '~/components/elements/product-link'
import { ProductStory } from '~/components/elements/product-story'
import { ProductSupply } from '~/components/elements/product-supply'
import { SectionTitle } from '~/components/elements/section-title'
import { Sentence } from '~/components/elements/sentence'
import json2string1 from '~/images/json2string-1.jpg?resize'

export const Json2String = () => {
  return (
    <SectionContainer id="json2string">
      <SectionTitle>json2string</SectionTitle>
      <ProductDescription>
        Transform to string for yarn/npm install from package.json dependencies json
      </ProductDescription>
      <ProductStory>
        <Sentence>
          JSON形式のオブジェクトを半角スペース区切りで文字列に変換するだけのサービスです。
        </Sentence>
        <Sentence>
          他のプロジェクトのdependenciesやdevDependenciesのパッケージ名だけ取り出して、npm
          installしたいと思うシーンが個人的によくあり、そのたびにスクリプトを書くのも面倒だったのでささっと変換できるサービスという形で作りました。
        </Sentence>
      </ProductStory>
      <ProductSupply>
        <ProductLink href="https://json2string.now.sh">Website - json2string.now.sh</ProductLink>
        <ProductLink href="https://github.com/ymkz/json2string">
          Repository - GitHub(ymkz/json2string)
        </ProductLink>
      </ProductSupply>
      <FlexRow space={16}>
        <ProductImage {...json2string1} />
      </FlexRow>
    </SectionContainer>
  )
}
