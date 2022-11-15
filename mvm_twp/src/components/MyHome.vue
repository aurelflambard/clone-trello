<template>
<div class="container">
    <h2>My Trello</h2>
     <div class="list-create">
        <input v-model="name" type="text" placeholder="saissez le titre de la liste...">
        <button @click.prevent="addList()">ajouter une liste</button>
    </div>
    <AddList  :lists="this.lists" @SuppList="deleteList" @UppdateList="UpdateList"/>
</div>
</template>
<script>
import AddList from './AddList.vue'
let WPAPI = require ('wpapi');
let wp = new WPAPI ({
    endpoint: 'http://localhost:8888/wordpress/wp-json',
    username: 'John',
    password: 'wick'
});
export default {
    components:{
        AddList
    },
    data(){
        return{
            name: '',
            slug: '',
            lists: []
        }
    },
    mounted(){
        wp.categories().then((data) => {
            this.lists = data;
            }).catch((err) =>{
                console.log(err);
            });
        },
    methods:{
        addList(){
            wp.categories().create({
                name: this.name,
                slug: this.name,
            }).then((reponse) =>{
                console.log(reponse);
                this.lists.push({ name: this.name, id: reponse.id})
                this.name = ""
            })
        },deleteList(cat_id){
            wp.categories().id(cat_id).param("force", true).delete()
            this.lists = this.lists.filter((list) => {
                return list.id != cat_id;
        });
      },UpdateList(cat_id, newName){
        wp.categories().id(cat_id).update({
            name: newName,
            status : 'publish',
        }).then(function (reponse) {
            console.log(reponse);
        })
      }
    }
}
</script>
<style>
.container{
    margin: 0 auto;
}
.list-create{
    margin: 2px solid black;
    height: 4vh;
    display: flex;
    flex-direction: column;
    width: 20%;
}
h2{
    text-align:center;
}
</style>