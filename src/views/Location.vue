<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-4 col-md-6"
        v-for="(item, key) in locationList"
        :key="key"
      >
        <b-card :title="item.name" class="m-4 text-black">
          <b-card-text class="text-black">
            <span class="text-green">Terrain:</span>
            {{ item.terrain }}</b-card-text
          >
          <b-card-text class="text-black">
            <span class="text-green">Climate:</span>
            {{ item.climate }}</b-card-text
          >
          <b-card-text class="text-black">
            <span class="text-green">Surface Water:</span>
            {{ item.surface_water }}</b-card-text
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
  name: "Location",
  mounted() {
    // this.getMovieList();
  },
  computed: {
    ...mapGetters("location", ["locationList"])
  },
  methods: {
    // ...mapActions("location", ["getLocationList"]),
    goToDetails(item) {
      this.$router.push({ path: `/location/${item.id}` });
    }
  }
};
</script>

<style lang="scss" scoped></style>
