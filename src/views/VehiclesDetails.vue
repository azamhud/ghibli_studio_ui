<template>
  <div class="box">
    <span class="box__title">{{ dataVehicles.name }}</span>
    <div class="subbox">
      <div class="content">
        <div class="content__top">Class</div>
        <div class="content__bot">{{ dataVehicles.vehicle_class }}</div>
      </div>
      <div class="content">
        <div class="content__top">Length</div>
        <div class="content__bot">{{ dataVehicles.length }}</div>
      </div>
    </div>
    <div
      class="minibox__header"
      @click="expandDescription = !expandDescription"
    >
      Description
      <div class="toogle">
        <span v-if="!expandDescription">+</span>
        <span v-else>-</span>
      </div>
    </div>
    <div v-if="expandDescription" class="minibox__body">
      {{ dataVehicles.description }}
    </div>

    <ExpandList :dataParent="dataMovie" headerValue="Films" itemValue="title" path="movie"/>
    <ExpandList class="mb-4" :dataParent="dataPeople" headerValue="Pilot" itemValue="name" path="people"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ExpandList from "../components/ExpandList";
export default {
  name: "VehiclesDetails",
  components:{
    ExpandList
  },
  data() {
    return {
      dataMovie: [],
      dataLocation: [],
      dataPeople: [],
      dataSpecies: [],
      dataVehicles: null,
      expandDescription: false
    };
  },
  mounted() {
    this.dataVehicles = this.vehiclesList.find(
      item => item.id === this.$route.params.id
    );
    if (this.dataVehicles !== undefined) {
      this.dataPeople = this.peopleList.filter(
        item =>
          item.id ===
          this.dataVehicles.pilot.substr(
            this.dataVehicles.pilot.lastIndexOf("/") + 1
          )
      );
      this.dataMovie = this.movieList.filter(
        item =>
          item.id ===
          this.dataVehicles.films.substr(
            this.dataVehicles.films.lastIndexOf("/") + 1
          )
      );
    }
  },
  computed: {
    ...mapGetters("movie", ["movieList"]),
    ...mapGetters("people", ["peopleList"]),
    ...mapGetters("vehicles", ["vehiclesList"])
  }
};
</script>

<style lang="scss" scoped></style>
