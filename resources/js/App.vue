<template>
    <div class="container-fluid">
        <navigationMenu></navigationMenu>
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
    import navigationMenu from './components/Menu.vue';
    export default {
        data() {
            return {
                //
            }
        },
        components: {
            navigationMenu
        }
    }
</script>