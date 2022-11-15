import {createRouter, createWebHistory} from 'vue-router'
import MyHome from '@/components/MyHome.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MyHome,
        }
    ]
})
export default router;