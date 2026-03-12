export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  return $fetch(`${config.public.apiBase}/latest`, {
    params: {
      apikey: config.apiSecret,
      q: query.q ?? 'ai',
      category: query.category ?? 'technology',
      language: query.language ?? 'en',
      size: query.size ?? 10
    }
  })
})
