<template>
  <div class="d-flex">
    <b-card
      :title="film.Title"
      :img-src="film.Poster"
      :img-alt="film.Title"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2">
      <b-card-text>
        {{ film.Plot }}, <br /> <br />
        Année de sortie : {{ film.Year }}
      </b-card-text>
      <b-button href="#" variant="primary" @click="addFav(film)" >Ajouter aux favoris</b-button>
    </b-card>
  </div>
</template>

<script>

const axios = require('axios').default; 

export default {
  name: "Card",
  props: {
    films: String
  },
  data() {
    return {
      film: {}
    };
  },
  methods: {
    addFav: function(film){
      this.$store.commit('addFav', film)
    }
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?i=" + this.films + "&apikey=fdcf0a59")
      .then(response => (this.film = response.data));
  }
};

</script>

<style></style>