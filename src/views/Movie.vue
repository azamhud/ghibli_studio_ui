<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-4 col-md-6"
        v-for="(item, key) in movieList"
        :key="key"
      >
        <b-card :title="item.title" class="m-4 text-black">
          <b-card-text class="text-black">
            <span class="text-green">Director:</span>
            {{ item.director }}</b-card-text
          >
          <b-card-text class="text-black">
            <span class="text-green">Producer:</span>
            {{ item.producer }}</b-card-text
          >
          <b-card-text class="text-black">
            <span class="text-green">Release Date:</span>
            {{ item.release_date }}</b-card-text
          >

          <b-card-text class="text-black">
            <span class="text-green">Rating:</span>
            {{ item.rt_score }}</b-card-text
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
  name: "Movie",
  mounted() {
    // this.getMovieList();
  },
  computed: {
    ...mapGetters("movie", ["movieList"])
  },
  methods: {
    // ...mapActions("movie", ["getMovieList"]),
    goToDetails(item) {
      this.$router.push({ path: `/movie/${item.id}` });
    }
  }
};
</script>

<style lang="scss" scoped></style>
