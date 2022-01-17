import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Details from './components/Details.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        name: 'Details',
        component: Details,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;