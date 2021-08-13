import { createApp } from 'vue'
import app from './App.vue'
import { createStore } from 'vuex';
/*import store_data from "./components/Storing_Data.vue"*/

const store = createStore({
    state() {
        return {
            Poke_database: []
        };
    },
});

const App = createApp(app);

/*App.component("database", store_data)*/

App.use(store);

App.mount('#app');
