<template>
    <div v-for="comment in comments" :key="comment.id">
        <p v-html="comment.content.rendered"></p>
    </div>
    <input v-model="content" type="text">
    <button @click.prevent="addComment()">Ajout commentaire</button>

</template>
<script>
let WPAPI = require('wpapi');
let wp = new WPAPI({
    endpoint: 'http://localhost:8888/wordpress/wp-json',
    username: 'John',
    password: 'wick'
});
export default {
    props: ['card_id'],
    data() {
        return {
            content: "",
            comments: []
        }
    }, mounted() {
        wp.comments().post(this.card_id).then((data) => {
            this.comments = data;
            console.log(this.comments)
        }).catch((err) => {
            console.log(err);
        });
    },
    methods : {
        addComment() {
            wp.comments().create({
                content: this.content,
                post: this.card_id,
            }).then((reponse)=> {
                console.log(reponse);
                this.comments.unshift({content: {rendered : this.content}, id: reponse.id})
                this.content = ""
            });
        }
    }
}
</script>
<style>
</style>