<template>
  <div>
    <div class="text-center">Favoris</div>
    <div class="d-flex">
      <b-card v-for="film in films"
        :key="film.Title"
        :title="film.Title"
        :img-src="film.Poster"
        :img-alt="film.Title"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ film.Plot }}, <br /><br />
          Année de sortie : {{ film.Year }}
        </b-card-text>
        <b-button href="#" variant="primary" @click="addFav(film)"
          >Ajouter aux favoris</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>

export default {
  name: "Favoris",
  data() {
    return {
      films: []
    };
  },
  mounted() {
    this.films = [...this.$store.getters.favorites];
  }
};
</script>

<style></style>