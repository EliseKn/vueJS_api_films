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
        
        addFav(state , favorite){
            /*
            let FavState = state.favorites.find(e => e === favorite);
            if (FavState) {
                // suppr des favoris
                state.favorites.splice(favorite);
                console.log("fav deleted")
            } else {*/
                // ajout aux favoris 
                state.favorites.push(favorite)
                console.log("fav added")
            // }

        },

    },   
})