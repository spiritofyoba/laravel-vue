<template>
    <div>
        <div class="row mt-3 mb-1">
            <div class="col-md-10 text-left">
                <h1>Posts</h1>
            </div>
            <div class="col-md-2 text-right">
                <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
            </div>
        </div>

        <div class="row align-items-center mt-2" v-for="post in posts" :key="post.id">
            <div class="col-xl-1">{{ post.id }}</div>
            <div class="col-xl-3">{{ post.title }}</div>
            <div class="col-xl-5">{{ post.body.slice(0, 100) + '...' }}</div>
            <div class="col-xl-3 text-right">
                <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link>
                <router-link :to="{name: 'view', params: { id: post.id }}" class="btn btn-success">View</router-link>
                <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button>
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
            deletePost(id)
            {
                let uri = window.location.origin + '/api/post/delete/${id}';
                this.axios.delete(uri).then(response => {
                    this.posts.splice(this.posts.indexOf(id), 1);
                });
            }
        }
    }
</script>