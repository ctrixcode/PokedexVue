<template>
  <button @click="toggle_list = !toggle_list">click</button>
  <the-head> </the-head>
  <div v-if="toggle_list">
  <the-card

  :bind:name='Poke_database[1].species.name'

  ></the-card>
  </div>
</template>

<script>
import TheHead from "./components/Thehead.vue";
import TheCard from "./components/card.vue"

export default {
  components: {
    TheHead,
    TheCard
  },
  data() {
    return {
      toggle_list: false,
      Poke_database: []
    };
  },
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
                this.Poke_database.push(() => {
                    return data
                }) 
                console.log(this.Poke_database);
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
      this.pokemon();
  },
  
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: hsl(0, 3%, 14%);
  }
</style>
