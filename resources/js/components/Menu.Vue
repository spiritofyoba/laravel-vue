<template>
    <nav id="nav" class="navbar navbar-expand-sm bg-dark navbar-dark row mb-5">
        <ul class="navbar-nav justify-content-start container">
            <!--UNLOGGED-->
            <li class="nav-item mr-3" v-if="!$auth.check()" v-for="(route, key) in routes.unlogged" v-bind:key="route.path">
                <router-link :to="{ name : route.path }" :key="key">
                    {{route.name}}
                </router-link>
            </li>
            <!--LOGGED USER-->
            <li class="nav-item mr-3" v-if="$auth.check()">
                <router-link :to="{ name : 'posts' }">Posts</router-link>
            </li>

            <li class="nav-item mr-3" v-if="$auth.check()">
                <router-link :to="{ name : 'search' }">Search</router-link>
            </li>

            <li class="nav-item mr-3" v-if="$auth.check(2)" v-for="(route, key) in routes.user" v-bind:key="route.path">
                <router-link :to="{ name : route.path }" :key="key">
                    {{route.name}}
                </router-link>
            </li>

            <!--LOGGED ADMIN-->
            <li class="nav-item mr-3" v-if="$auth.check(1)" v-for="(route, key) in routes.admin" v-bind:key="route.path">
                <router-link :to="{ name : route.path }" :key="key">
                    {{route.name}}
                </router-link>
            </li>
            <!--LOGOUT-->
            <li class="nav-item mr-3" v-if="$auth.check()">
                <a href="#" @click.prevent="$auth.logout()">Logout</a>
            </li>
        </ul>
    </nav>
</template>
<script>
    export default {
        data() {
            return {
                routes: {
                    // UNLOGGED
                    unlogged: [
                        {
                            name: 'Home',
                            path: 'home'
                        },
                        {
                            name: 'Sign up',
                            path: 'register'
                        },
                        {
                            name: 'Sign in',
                            path: 'login'
                        }
                    ],
                    // LOGGED USER
                    user: [
                        {
                            name: 'Dashboard',
                            path: 'dashboard'
                        }
                    ],
                    // LOGGED ADMIN
                    admin: [
                        {
                            name: 'Dashboard',
                            path: 'admin.dashboard'
                        }
                    ]
                }
            }
        },
        mounted() {
            //
        }
    }
</script>