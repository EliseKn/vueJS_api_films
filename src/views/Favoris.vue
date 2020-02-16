<template>
  <div>
    <h1 class="text-center">Favoris</h1>
    <div class="d-flex">
      <div v-for="result in films"
        :key="result.imdbID"
        :title="result.Title"
        :img-src="result.Poster"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
      <div>
        Sortie en {{ result.Year }}
      </div>
      
      <!--
      <button href="#" 
        variant="primary" 
        @click="addFav(result)" >Supprimer des favoris 
      </button> -->

      </div>
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
  /*
    methods: {
    addFav: function(result){
      this.$store.commit('addFav', result)
    }
  },*/
  mounted() {
    this.films = [...this.$store.getters.favorites];
  }
};
</script>

<style>
button {
    cursor: pointer;
}
</style>