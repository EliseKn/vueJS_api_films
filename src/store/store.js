import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state: {
        favorites: [],
        unfavorite: []
    },
    getters: {
        favorites: state => state.favorites
    },
    mutations: {
        // ajout aux favoris 
        addFav(state , favorite){
            state.favorites.push(favorite)
        },

    },   
})