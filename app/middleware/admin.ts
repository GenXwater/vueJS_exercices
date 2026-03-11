export default defineNuxtRouteMiddleware((to, from) => {
    const isAdmin = false

    if (!isAdmin) {
        return navigateTo(`/login`)
    }
})