import { createRouter, createWebHistory } from 'vue-router';
import LoginRegister from '../components/LoginRegister.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        componente: LoginRegister
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;