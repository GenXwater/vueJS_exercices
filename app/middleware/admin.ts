export default defineNuxtRouteMiddleware((to, from) => {
    const isAdmin = true

    console.log('to', to)
    console.log('from', from)

    const secretValue = to.query.secret // ajout d'une propriété "secret" dans "query" (voir dans console du nav)

    if (!isAdmin || secretValue != "123") { // si "/admin?secret=123" dans l'URL, alors OK
        return navigateTo(`/login`)
    }
})