<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark row">
            <ul class="navbar-nav justify-content-start container">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/create" class="nav-link">Create Post</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/posts" class="nav-link">Posts</router-link>
                </li>
            </ul>
        </nav>
        <div class="row">
            <div class="container">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s
    }

    .fade-leave-active {
        transition: opacity 0s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>

<script>

    export default{
    }
</script>