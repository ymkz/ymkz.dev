export const getSlugs = (context: __WebpackModuleApi.RequireContext) => {
  const keys = context.keys()
  return keys.map((key) => key.replace(/^.*[/\\]/, '').slice(0, -3))
}
