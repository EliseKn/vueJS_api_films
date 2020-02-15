import Vue from "vue";
import router from "vue-router";

// import des composants 
import HomePage from "./../views/HomePage.vue";
import Favoris from "./../views/Favoris.vue";

Vue.use(router);

export default new router({
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/Favoris",
      component: Favoris
    }
  ]
});