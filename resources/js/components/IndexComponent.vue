<template>
    <div>
        <div class="row mt-3 mb-1">
            <div class="col-md-6 text-left">
                <h1>Posts</h1>
            </div>
            <div class="col-md-6 text-right">
                <router-link v-if="$auth.check(1)" :to="{ name: 'create' }" class="btn btn-primary"><i class="fa fa-plus"></i></router-link>
            </div>
        </div>

        <div class="row align-items-center mt-2" v-for="post in posts" :key="post.id">
            <div class="col-xl-1">{{ post.id }}</div>
            <div class="col-xl-3"> <router-link :to="{name: 'view', params: { id: post.slug }}">{{ post.title }}</router-link></div>
            <div class="col-xl-5">{{ post.body.slice(0, 100) + '...' }}</div>
            <div class="col-xl-3 text-right">
                <router-link  v-if="$auth.check(1)" :to="{name: 'edit', params: { id: post.slug }}" class="btn btn-primary"><i class="fa fa-pencil"></i></router-link>
                <router-link :to="{name: 'view', params: { id: post.slug }}" class="btn btn-success"><i class="fa fa-eye"></i></router-link>
                <button class="btn btn-danger" v-if="$auth.check(1)" @click.prevent="deletePost(post.slug)"><i class="fa fa-trash"></i></button>
            </div>
            <div class="col-12">
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        created() {
            let uri = window.location.origin + '/api/posts';
            this.axios.get(uri).then(response => {
                this.posts = response.data.data;
            });
        },
        methods: {
            deletePost(id) {
                let uri = window.location.origin + '/api/post/delete/' + id;
                this.axios.delete(uri).then(response => {
                    this.posts.splice(this.posts.indexOf(id), 1);
                });
            }
        }
    }
</script>