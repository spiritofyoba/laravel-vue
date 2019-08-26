<template>
    <div>
        <div class="form-group">
            <label for="exampleInputEmail1">Posts search</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search"  v-model="query">
        </div>
        <ul class="list-group" v-if="results.length > 0 && query">
            <li class="list-group-item list-group-item-action" v-for="result in results" :key="result.id">
                <router-link :to="{name: 'view', params: { id: result.searchable.slug }}">{{ result.title }}</router-link>
                <p class="mt-3">{{ result.searchable.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                query: null,
                results: []
            };
        },
        watch: {
            query(after, before) {
                this.searchPosts();
            }
        },
        methods: {
            searchPosts() {
                axios.get('posts/search', { params: { query: this.query } })
                    .then(response => this.results = response.data)
                    .catch(error => {});
            }
        }
    }
</script>