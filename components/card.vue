<template>
    <div>
        <img src='./Assets/charmander.svg' alt="Image not Found" width="160">
        <p>{{ name }}</p>
        <div id="pok_types">
        <button>{{ type1 }}</button>
        <button v-if="type != undefined">{{ type2 }}</button>
        </div>
        <button class="detail_button" v-on:click="op_dialog">Show Details</button>
        <big-dialog 
        v-if="Open_Dialog" 
        :image="img" 
        v-on:close="cl_dialog"
        ></big-dialog>
    </div>
</template>

<script>
import BigDialog from "./BigDialog.vue"
export default {
    props: ['name','type1','type2'],
    components: {
        BigDialog
    },
    data(){
        return {
            Open_Dialog: false,
            img: "https://seeklogo.com/images/B/bulbasaur-logo-8A27924C02-seeklogo.com.png"
        };
    },
    methods: {
        op_dialog() {
            this.Open_Dialog = true;
            console.log("Open Dialog property: " + this.Open_Dialog);
        },
        cl_dialog() {
            console.log("called cl dialog");
            this.Open_Dialog = false;
        }
        
    },
    
}
</script>

<style scoped>
div {
    margin: 5vh 1vw;
    padding: 1vh;
    height: 48vh;
    width: 15vw;
    border: 2px solid hsl(0, 0%, 100%);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    z-index: 50;
}

img {
    align-self: center;
}
p {
    text-align: center;
    color: hsl(0, 0%, 100%);
    font-size: 2rem;
}
#pok_types {
    margin: 0 auto;
    align-self: center;
    border: none;
    height: 4vh;
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
button {
    border-radius: 30px;
    font-size: 1.3rem;
    width:48%;
    height: 5vh;
}
.detail_button {
    margin-top: 2px;
    width: 80%;
    align-self: center;
}
</style>
