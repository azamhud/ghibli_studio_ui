<template>
  <div class="box">
    <span class="box__title">{{ dataSpecies.name }}</span>
    <div class="subbox">
      <div class="content">
        <div class="content__top">Classification</div>
        <div class="content__bot">{{ dataSpecies.classification }}</div>
      </div>
      <div class="content">
        <div class="content__top">Eye Colors</div>
        <div class="content__bot">{{ dataSpecies.eye_colors }}</div>
      </div>
      <div class="content">
        <div class="content__top">Hair Colors</div>
        <div class="content__bot">{{ dataSpecies.hair_colors }}</div>
      </div>
    </div>

    <ExpandList :dataParent="dataMovie" headerValue="Films" itemValue="title" path="movie"/>
    <ExpandList class="mb-4" :dataParent="dataPeople" headerValue="People" itemValue="name" path="people"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ExpandList from "../components/ExpandList";
export default {
  name: "SpeciesDetails",
  components:{
    ExpandList
  },
  data() {
    return {
      dataMovie: [],
      dataPeople: [],
      dataSpecies: null,
      dataVehicles: []
    };
  },
  mounted() {
    this.dataSpecies = this.speciesList.find(
      item => item.id === this.$route.params.id
    );
    if (this.dataSpecies !== undefined) {
      let tempDataMovieID = [];
      this.dataSpecies.films.forEach(element => {
        tempDataMovieID.push(element.substr(element.lastIndexOf("/") + 1));
      });
      this.dataMovie = this.movieList.filter(item =>
        tempDataMovieID.includes(item.id)
      );
      let tempDataPeopleID = [];
      this.dataSpecies.people.forEach(element => {
        tempDataPeopleID.push(element.substr(element.lastIndexOf("/") + 1));
      });
      this.dataPeople = this.peopleList.filter(item =>
        tempDataPeopleID.includes(item.id)
      );
    }
  },
  computed: {
    ...mapGetters("movie", ["movieList"]),
    ...mapGetters("people", ["peopleList"]),
    ...mapGetters("species", ["speciesList"])
  }
};
</script>

<style lang="scss" scoped></style>
