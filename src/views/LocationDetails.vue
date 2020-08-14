<template>
  <div class="box">
    <span class="box__title">{{ dataLocation.name }}</span>
    <div class="subbox">
      <div class="content">
        <div class="content__top">Terrain</div>
        <div class="content__bot">{{ dataLocation.terrain }}</div>
      </div>
      <div class="content">
        <div class="content__top">Climate</div>
        <div class="content__bot">{{ dataLocation.climate }}</div>
      </div>
      <div class="content">
        <div class="content__top">Surface Water</div>
        <div class="content__bot">{{ dataLocation.surface_water }}</div>
      </div>
    </div>
    <ExpandList :dataParent="dataMovie" headerValue="Films" itemValue="title" path="movie"/>
    <ExpandList class="mb-4" :dataParent="dataPeople" headerValue="Residents" itemValue="name" path="people"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ExpandList from "../components/ExpandList";
export default {
  name: "LocationDetails",
  components:{
    ExpandList
  },
  data() {
    return {
      dataMovie: [],
      dataLocation: null,
      dataPeople: []
    };
  },
  mounted() {
    this.dataLocation = this.locationList.find(
      item => item.id === this.$route.params.id
    );
    if (this.dataLocation !== undefined) {
      let tempDataMovieID = [];
      this.dataLocation.films.forEach(element => {
        tempDataMovieID.push(element.substr(element.lastIndexOf("/") + 1));
      });
      this.dataMovie = this.movieList.filter(item =>
        tempDataMovieID.includes(item.id)
      );
      let tempDataPeopleID = [];
      this.dataLocation.residents.forEach(element => {
        tempDataPeopleID.push(element.substr(element.lastIndexOf("/") + 1));
      });
      this.dataPeople = this.peopleList.filter(item =>
        tempDataPeopleID.includes(item.id)
      );
    }
  },
  computed: {
    ...mapGetters("movie", ["movieList"]),
    ...mapGetters("location", ["locationList"]),
    ...mapGetters("people", ["peopleList"])
  },
};
</script>

<style lang="scss" scoped></style>
