<template>
  <div class="box">
    <span class="box__title">{{ dataMovie.title }}</span>
    <div class="subbox">
      <div class="content">
        <div class="content__top">Director</div>
        <div class="content__bot">{{ dataMovie.director }}</div>
      </div>
      <div class="content">
        <div class="content__top">Year</div>
        <div class="content__bot">{{ dataMovie.release_date }}</div>
      </div>
      <div class="content">
        <div class="content__top">Rating</div>
        <div class="content__bot">{{ dataMovie.rt_score }}</div>
      </div>
      <div class="content">
        <div class="content__top">Producer</div>
        <div class="content__bot">{{ dataMovie.producer }}</div>
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
      {{ dataMovie.description }}
    </div>


    <ExpandList :dataParent="dataLocation" headerValue="Location" itemValue="name" path="location"/>
    <ExpandList :dataParent="dataPeople" headerValue="People" itemValue="name" path="people"/>
    <ExpandList :dataParent="dataSpecies" headerValue="Species" itemValue="name" path="species"/>
    <ExpandList class="mb-4" :dataParent="dataVehicles" headerValue="Vehicles" itemValue="name" path="vehicles"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ExpandList from "../components/ExpandList";
export default {
  name: "MovieDetails",
  components:{
    ExpandList
  },
  data() {
    return {
      dataMovie: null,
      dataLocation: [],
      dataPeople: [],
      dataSpecies: [],
      dataVehicles: [],
      expandDescription: false
    };
  },
  mounted() {
    this.dataMovie = this.movieList.find(
      item => item.id === this.$route.params.id
    );
    if (this.dataMovie !== undefined) {
      this.dataLocation = this.locationList.filter(item =>
        item.films.find(element => element.includes(this.$route.params.id))
      );
      this.dataPeople = this.peopleList.filter(item =>
        item.films.find(element => element.includes(this.$route.params.id))
      );
      this.dataSpecies = this.speciesList.filter(item =>
        item.films.find(element => element.includes(this.$route.params.id))
      );
      this.dataVehicles = this.vehiclesList.filter(item =>
        item.films.includes(this.$route.params.id)
      );
    }
  },
  computed: {
    ...mapGetters("movie", ["movieList"]),
    ...mapGetters("location", ["locationList"]),
    ...mapGetters("people", ["peopleList"]),
    ...mapGetters("species", ["speciesList"]),
    ...mapGetters("vehicles", ["vehiclesList"])
  }
};
</script>

<style lang="scss" scoped></style>
