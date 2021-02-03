import { createRouter, createWebHistory } from 'vue-router';
import TestForm from './components/gui/TestForm.vue';
import PrintTestForm from './components/pages/PrintTestform.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            Name: 'Home',
            component: TestForm
        },
        {
            path: '/print',
            Name: 'PrintForm',
            component: PrintTestForm
        }
    ]
});

export default router;
