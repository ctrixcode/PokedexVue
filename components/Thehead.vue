<template>
    <header> 
    <h1>Pokedex</h1>
    <input type="text" name="search" id="">
    <button for="search">Search</button>
    </header>
</template>


<style scoped>
    header {
        text-align: center;
        height: 35vh;
        box-shadow:0 0 10px rgb(156, 153, 153);
    }
    h1 {
        color: white;
        line-height: 14vh;
    }
    input {
        margin-top: 7vh;
        padding: 5px;
        font-size: 2rem;
        width: 35vw;
        height: 6vh;
        border-radius: 30px;
    }

    input:active {
        border: none;
    }
    button {
        margin-left: 5px;
        font-size: 2rem;
        color: hsl(0, 0%, 0%);
        width: 9vw;
        border-radius: 20px;
    }
    button:hover {
        box-shadow:2px rgb(12, 11, 11);
        color: white;
        background: hsl(0, 0%, 0%);
    }
</style>
