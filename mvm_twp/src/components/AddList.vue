<template>
    <div class="myLists">
        <div v-for="list in lists" :key="list" class="list">
            {{list.name}}
            <button @click="$emit('SuppList', list.id)">X</button>
            <ModifList :name_list="list.name"/>
            <div>
               <AddCard :cat_id="list.id" :cat_name="list.name"/> 
            </div>
        </div>
    </div>
</template>
<script>
import AddCard from './AddCard.vue'
import ModifList from './ModifList.vue'
export default {
    components:{
        AddCard , ModifList
    },
    props: ["lists"],

}
</script>
<style>
.pointer {
    cursor: pointer;
}
.myLists{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 10vh;
    margin-left: 12%;

}
.list{
    min-height: 20vh;
    max-height: 150vh;
    border: 1px solid black;
    margin: 2%;
    background-color: beige;
    border-radius: 6px;
}

/*RESPONSIVE*/
@media (min-width: 600px) {
    .myLists { grid-template-columns: repeat(3, 1fr); }
  }

@media (min-width: 950px) {
    .myLists { grid-template-columns: repeat(4, 1fr); }
  } 
</style>