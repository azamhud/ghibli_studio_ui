<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-4 col-md-6"
        v-for="(item, key) in vehiclesList"
        :key="key"
      >
        <b-card :title="item.name" class="m-4 text-black">
          <b-card-text class="text-black">
            <span class="text-green">Class:</span>
            {{ item.vehicle_class }}</b-card-text
          >
          <b-card-text class="text-black">
            <span class="text-green">Length:</span>
            {{ item.length }}</b-card-text
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
  name: "Vehicles",
  mounted() {
    // this.getMovieList();
  },
  computed: {
    ...mapGetters("vehicles", ["vehiclesList"])
  },
  methods: {
    // ...mapActions("movie", ["getMovieList"]),
    goToDetails(item) {
      this.$router.push({ path: `/vehicles/${item.id}` });
    }
  }
};
</script>

<style lang="scss" scoped></style>
