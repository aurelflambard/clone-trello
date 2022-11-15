<template>
    <button @click.prevent="listModale()">Modifier</button>
            <div class="bloc-modale-list" v-if="reveled">
                <div class="overlay-list" v-on:click="listModale"></div>
                <div class="modale-list card">
                    <div class="btn-modale-list btn-danger pointer" v-on:click="listModale">X</div>
                    <input v-model="myname" type="text">
                    <button @click="$emit('UpdateList', list.id , this.myname)">Modifier</button>
                </div>
            </div>
</template>
<script>
    export default{
        props: ['name_list'],
         methods: {
        listModale(){
            this.reveled = !this.reveled;
        }
    },data(){
        return{  
            reveled: false, 
            myname: this.name_list,
        }
    },
    }
</script>
<style>
.bloc-modale-list{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.overlay-list{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.modale-list{
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: fixed;
}
.btn-modale-list{
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>