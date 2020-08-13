<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-4 col-md-6"
        v-for="(item, key) in speciesList"
        :key="key"
      >
        <b-card :title="item.name" class="m-4 text-black">
          <b-card-text class="text-black">
            <span class="text-green">Classification:</span>
            {{ item.classification }}</b-card-text
          >
          <b-card-text class="text-black">
            <span class="text-green">Eye Color:</span>
            {{ item.eye_colors }}</b-card-text
          >

          <b-card-text class="text-black">
            <span class="text-green">Hair Color:</span>
            {{ item.hair_colors }}</b-card-text
          >

          <b-button @click="goToDetails(item)" variant="primary"
            >See Details</b-button
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Species",
  mounted() {
    // this.getMovieList();
  },
  computed: {
    ...mapGetters("species", ["speciesList"])
  },
  methods: {
    // ...mapActions("movie", ["getMovieList"]),
    goToDetails(item) {
      this.$router.push({ path: `/species/${item.id}` });
    }
  }
};
</script>

<style lang="scss" scoped></style>
