<template>
    <div v-for="card in cards" :key="card" class="c-title">
        {{card.title.rendered}}
        <AddComment :card_id="card.id" :card_title="card.title.rendered" :cat_id="cat_id" :cat_name="cat_name"/>
        <button @click.prevent="deleteCard(card.id)">X</button>
    </div>
   <div class="a-carte">
    <input v-model="title" type="text" placeholder="Ajouter une carte">
    <button @click.prevent="addCard()">Ajouter une carte</button>
    </div>
</template>
<script>
import AddComment from './AddComment.vue'
let WPAPI = require ('wpapi');
let wp = new WPAPI ({
    endpoint: 'http://localhost:8888/wordpress/wp-json',
    username: 'John',
    password: 'wick'
});
export default {
    components: {
        AddComment
    },
    props: ['cat_id', 'cat_name'], 
    data(){
        return{
            title: '',
            cards: '',

        }
    },methods:{
        addCard(){
            wp.posts().create({
                title: this.title,
                categories: this.cat_id,
                status: "publish"
            }).then((reponse)=>{
                console.log(reponse);
                this.cards.push({title: {rendered: this.title}, id: reponse.id})
            })
        },
        deleteCard(cardId) {
            wp.posts(cardId).id(cardId).delete()
            .then((reponse)=>{
                console.log(reponse);
                this.cards = this.cards.filter((card)=> {
                    return card.id != cardId;
                });
            })
        },
    },mounted(){
        wp.posts().categories(this.cat_id).then((data)=>{
            this.cards = data;
        }).catch((err)=>{
            console.log(err);
        });
    }
}
</script>
<style>
.a-carte{
    margin-top: 6vh;
    margin-bottom: 1vh;
    margin-left: 2%;
}

.c-title{
    border: 2px solid grey;
    width: 90%;
    border-radius: 4px;
    background-color: white;
    margin: 0 auto;
    margin-top: 1vh;
    display: flex;
    justify-content: space-between;
}
</style>