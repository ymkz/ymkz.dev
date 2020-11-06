import { NextSeo } from 'next-seo'

function Error404() {
  return (
    <>
      <NextSeo title="404" />
      <div className="error-code">404</div>
    </>
  )
}

export default Error404
