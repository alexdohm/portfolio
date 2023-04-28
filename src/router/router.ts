import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/portfolio',
            component: () => import('@/views/Portfolio.vue'),
        },
        {
            path: '/contact',
            component: () => import('@/views/Contact.vue'),
        },
    ],
})