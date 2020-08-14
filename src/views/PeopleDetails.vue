<template>
  <div class="box">
    <span class="box__title">{{ dataPeople.name }}</span>
    <div class="subbox">
      <div class="content">
        <div class="content__top">Gender</div>
        <div class="content__bot">{{ dataPeople.gender }}</div>
      </div>
      <div class="content">
        <div class="content__top">Age</div>
        <div class="content__bot">{{ dataPeople.age }}</div>
      </div>
      <div class="content">
        <div class="content__top">Eye Color</div>
        <div class="content__bot">{{ dataPeople.eye_color }}</div>
      </div>
      <div class="content">
        <div class="content__top">Hair Color</div>
        <div class="content__bot">{{ dataPeople.hair_color }}</div>
      </div>
    </div>


    <ExpandList :dataParent="dataMovie" headerValue="Films" itemValue="title" path="movie"/>
    <ExpandList class="mb-4" :dataParent="dataSpecies" headerValue="Species" itemValue="name" path="species"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ExpandList from "../components/ExpandList";
export default {
  name: "PeopleDetails",
  components:{
    ExpandList
  },
  data() {
    return {
      dataMovie: [],
      dataPeople: null,
      dataSpecies: []
    };
  },
  mounted() {
    this.dataPeople = this.peopleList.find(
      item => item.id === this.$route.params.id
    );
    if (this.dataMovie !== undefined) {
      let tempDataMovieID = [];
      this.dataPeople.films.forEach(element => {
        tempDataMovieID.push(element.substr(element.lastIndexOf("/") + 1));
      });
      this.dataMovie = this.movieList.filter(item =>
        tempDataMovieID.includes(item.id)
      );
      this.dataSpecies = this.speciesList.filter(
        item =>
          item.id ===
          this.dataPeople.species.substr(
            this.dataPeople.species.lastIndexOf("/") + 1
          )
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
