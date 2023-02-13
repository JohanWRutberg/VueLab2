import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.vue'
import router from './router'

import './assets/base.css'


const app = createApp(App)

const store = createStore({
  strict: true,
  state: { jokes: null },
  mutations: {
    setJokes(state, jokes) {
      state.jokes = jokes;
    }
  },
  actions: {
    async fetchJokes({ commit }) {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist&type=twopart&amount=10"
      );
      commit("setJokes", response.data.jokes);
    }
  },
  getters: {
    jokes: (state) => state.jokes,
  },
});

app.use(store)
app.use(router)
app.use(bootstrap)

app.mount('#app')
