import React from 'react'
import { BaseRow } from '~/components/abstracts/base-row'
import { ProductContainer } from '~/components/abstracts/product-container'
import { ProductTitle } from '~/components/elements/product-title'
import { ProductSubtitle } from '~/components/elements/product-subtitle'
import { ProductDescription } from '~/components/elements/product-description'
import { ProductSupply } from '~/components/elements/product-supply'
import { ProductLink } from '~/components/elements/product-link'
import { ProductImage } from '~/components/elements/product-image'
import { Sentence } from '~/components/elements/sentence'

export function Json2String() {
  return (
    <ProductContainer id="json2string">
      <ProductTitle>JSON2STRING</ProductTitle>
      <ProductSubtitle>
        Transform to string for yarn/npm install from package.json dependencies json
      </ProductSubtitle>
      <ProductDescription>
        <Sentence>
          JSON形式のオブジェクトを半角スペース区切りで文字列に変換するだけのサービスです。
        </Sentence>
        <Sentence>
          他のプロジェクトのdependenciesやdevDependenciesのパッケージ名だけ取り出して、npm
          installしたいと思うシーンが個人的によくあり、そのたびにスクリプトを書くのも面倒だったのでささっと変換できるサービスという形で作りました。
        </Sentence>
      </ProductDescription>
      <ProductSupply>
        <ProductLink href="https://json2string.now.sh">Website - json2string.now.sh</ProductLink>
        <ProductLink href="https://github.com/ymkz/json2string">
          Repository - GitHub(ymkz/json2string)
        </ProductLink>
      </ProductSupply>
      <BaseRow space={16}>
        <ProductImage image={require('~/static/images/json2string-1.jpg?resize')} />
      </BaseRow>
    </ProductContainer>
  )
}
