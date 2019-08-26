import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import ViewComponent from './components/ViewComponent.vue';
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';
import AdminDashboard from './pages/admin/Dashboard.vue';
import PostsSearch from './pages/Search.vue';

import VueRouter from 'vue-router'

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent,
        meta: {
            auth: false
        }
    },
    {
        name: 'search',
        path: '/search',
        component: PostsSearch,
        meta: {
            auth: true
        }
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent,
        meta: {
            auth: {roles: 1, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        }
    },
    {
        name: 'posts',
        path: '/posts',
        component: IndexComponent,
        meta: {
            auth: true
        }
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent,
        meta: {
            auth: {roles: 1, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        }
    },
    {
        name: 'view',
        path: '/post/:id',
        component: ViewComponent,
        meta: {
            auth: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    // USER ROUTES
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    // ADMIN ROUTES
    {
        path: '/admin',
        name: 'admin.dashboard',
        component: AdminDashboard,
        meta: {
            auth: {roles: 1, redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        }
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router