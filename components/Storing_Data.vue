<template>
    <p>hi</p>
</template>
<script>
export default {
    methods: {
        Pokedex_download(poke_num) {
            fetch("https://pokeapi.co/api/v2/pokemon/" + poke_num)
            .then(res => {
                if(res.ok)
                {
                    return res.json();
                }
                else {
                    return "Error";
                }
            }).then((data) => {
                this.$store.state.Poke_database.push(() => {
                    return data
                }) 
            });
        },
        pokemon() {
        let x = 1;
        while( x < 10 ) {
        this.Pokedex_download(x);
        x++;
        }
        }
    },
    beforeMount() {
        
    },
}

</script>
