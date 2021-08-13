<template>
        <dialog open>
            <header>
                <button v-on:click="$emit('close')">Close</button>
            </header>
            <div>
            <img src="./Assets/charmander.svg" alt="" width="350">
            <ul>
                <li>Health</li>
                <li><div class="base"><div class="bar"></div></div> <p>80</p></li>
                <li>Attack</li>
                <li><div class="base"><div class="bar attack"></div></div> <p>80</p></li>
                <li>Defense</li>
                <li><div class="base"><div class="bar def"></div></div> <p>80</p></li>
                <li>Special Attack</li>
                <li><div class="base"><div class="bar sp_attack"></div></div> <p>80</p></li>
                <li>Speial Defense</li>
                <li><div class="base"><div class="bar sp_def"></div></div> <p>80</p></li>
                <li>Speed</li>
                <li><div class="base"><div class="bar speed"></div></div> <p>80</p></li>
            </ul>
            </div>
        </dialog>
</template>

<script>
export default {
    props: ['image'],
    emits: ['close']
}
</script>

<style scoped>
header {
    padding: 1vh;
    display: grid;
    justify-content: flex-end;
}
dialog {
    color: hsl(0, 0%, 100%);
    background: hsl(0, 3%, 14%);
    position: fixed;
    top: 12vh;
    z-index: 100;
    height: 80vh;
    left: 5%;
    overflow: hidden;
    border: 1px solid hsl(0, 9%, 4%);
    width: 90%;
}
header button {
    border-radius: 30px;
    width: 6vw;
    font-size: 1.5rem;
    align-self: flex-end;
}
div {
    display: flex;
    justify-content: space-around;
}
img {
    margin-left: 2vw;
}
ul {
    display: flex;
    flex-direction: column;
    list-style: none;
}
p {
    display: inline-block;
    font-size: 1.7rem;
}
.base {
    margin-top: 1vh;
    width: 40vw;
    height: 3vh;
    display: inline-flex;
    flex-direction: column;
}
.bar {
    margin-left: 0;
    background: green;
    width: 80%;
    height: 100%;
}
.attack {
    background: red;
}
.def {
    background: royalblue;
}
.sp_attack {
    background: slateblue;
}
.sp_def {
    background: orchid;
}
</style>
