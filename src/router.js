import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
    {
        path: '/:catchAll(.*)',
        name: 'NotFoundView',
        component: () => import('@/views/utils/NotFoundView.vue'),
        props: route => ({ key: route.fullPath })
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
