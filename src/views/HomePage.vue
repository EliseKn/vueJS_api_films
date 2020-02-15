<template>
  <b-container class="d-flex align-center flex-column">
    <h1 class="text-center">Liste des films</h1>
    <div class="row d-flex justify-content-center">
      <div v-for="film in films" :key="film.imdbID">
        <Card class="d-flex justify-content-center" :film="film.imdbID"></Card>
      </div>
    </div>
  </b-container>
</template>

<script>

const axios = require('axios').default; 

import Card from "./../components/Card.vue";

export default {
  name: "HomePage",
  components: {
    Card
  },
  data() {
    return {
      films: null
    };
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?s=galaxy&apikey=fdcf0a59")
      .then(response => (this.films = response.data.Search));
  }
};
</script>

<style>
</style>