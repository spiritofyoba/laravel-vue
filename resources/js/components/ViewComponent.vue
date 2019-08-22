<template>
    <div>
        <div class="row mt-3 mb-1">
            <div class="col-md-12">
                <h1>{{ post.title }}</h1>
            </div>
            <div class="col-md-12">
                {{ post.body }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: []
            }
        },
        created() {
            let uri = window.location.origin + '/api/post/' + this.$route.params.id;
            this.axios.get(uri).then(response => {
                this.post = response.data;
            });
        },
    }
</script>