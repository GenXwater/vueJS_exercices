export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  return $fetch(`${config.public.apiBase}/latest`, {
    params: {
      apikey: config.apiSecret,
      q: query.q ?? 'ai',
      category: query.category ?? 'technology',
      language: query.language ?? 'fr',
      country: query.country ?? 'fr',
      size: query.size ?? 10
    }
  })
})
