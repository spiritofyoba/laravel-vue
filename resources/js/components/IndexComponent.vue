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

        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td class="align-middle">{{ post.id }}</td>
                <td class="align-middle">{{ post.title }}</td>
                <td class="align-middle">{{ post.body }}</td>
                <td class="align-middle">
                    <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link>
                    <router-link :to="{name: 'view', params: { id: post.id }}" class="btn btn-success">View</router-link>
                    <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
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