import fm from 'front-matter'

export const getPosts = (context: __WebpackModuleApi.RequireContext) => {
  const keys = context.keys()
  const values = keys.map((key) => context(key))
  return keys.map((key, index) => {
    const slug = key.replace(/^.*[/\\]/, '').slice(0, -3)
    const content = values[index]
    const { attributes: frontmatter } = fm(content.default)
    return { slug, frontmatter }
  })
}
