<template>
    <div @click.prevent="toggleModale()" class="pointer">....</div>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" v-on:click="toggleModale"></div>
        <div class="modale card">
           <div class="btn-modale btn btn-danger" v-on:click="toggleModale">X</div>
            <h2>{{card_title}}</h2>
            <span>Dans la liste {{cat_name}}</span>
            <div>
                <p>Commentaire</p>
                <MyComment :card_id="card_id"/>
            </div>
        </div>
    </div>
</template>
<script>
import MyComment from './MyComment.vue'
export default {
    components: {
        MyComment
    },
    props: ["card_id", "card_title", "cat_id", "cat_name"],
    data() {
        return {
            revele: false,
        };
    },
    methods: {
        toggleModale() {
            this.revele = !this.revele;
        },
    },

}

</script>
<style>
.bloc-modale{
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

.pointer {
    cursor: pointer;
}

.overlay {
    background: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.modale{
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: fixed;
}
.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
