<template>
  <div class="d-flex">
    <div
      :title="result.Title"
      :img-src="result.Poster"
      img-alt="image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2">
      <div>
        {{ result.Year }}
      </div>
      <button href="#" 
        variant="primary" 
        @click="addFav(result)" >Ajouter aux favoris </button>
    </div>
  </div>
</template>

<script>

const axios = require('axios').default; 

export default {
  name: "Card",
  props: {
    film: String
  },
  data() {
    return {
      result: {}
    };
  },
  methods: {
    addFav: function(result){
      this.$store.commit('addFav', result)
    }
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?s=galaxy&apikey=fdcf0a59")
      .then(response => (this.result = response.data));
  }
};

</script>

<style></style>