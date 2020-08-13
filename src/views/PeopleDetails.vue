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

    <div class="minibox__header" @click="expandFilm = !expandFilm">
      Films
      <div class="toogle">
        <span v-if="!expandFilm">+</span>
        <span v-else>-</span>
      </div>
    </div>
    <div v-if="expandFilm" class="minibox__body">
      <span v-if="dataMovie.length === 0">No Data Available</span>
      <ul>
        <li v-for="(item, key) in dataMovie" :key="key">
          {{ item.title }}
          <svg
            class="ml-2"
            style="cursor: pointer"
            @click="goToFilm(item)"
            width="15"
            height="15"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.1352 23.7248L27.9928 0.587221C28.0258 0.395139 27.9434 0.203058 27.7843 0.0932967C27.6965 0.0329283 27.5977 0 27.4935 0C27.4057 0 27.3234 0.0219522 27.2411 0.0658565L0.254199 15.4927C0.0840906 15.5915 -0.014682 15.7836 0.00178013 15.9812C0.0237296 16.1788 0.155426 16.3489 0.341997 16.4093L8.4633 19.1149L11.5911 27.6707C11.6624 27.8683 11.8545 28 12.063 28C12.085 28 12.1014 28 12.1179 27.9945C12.2441 27.978 12.3648 27.9122 12.4526 27.8024L12.5404 27.6927L12.5459 27.6982L17.0894 21.9851L23.4712 24.1145C23.6084 24.1584 23.7676 24.1419 23.8883 24.0706C24.0255 23.9992 24.1133 23.8675 24.1352 23.7248ZM1.73579 15.8056L24.3273 2.89769L8.72669 18.138L1.73579 15.8056ZM12.4746 20.0259L11.8271 25.3548L9.44553 18.8459L22.0774 6.50333L22.286 6.68444L12.5733 19.7844C12.5185 19.8557 12.4855 19.9381 12.4746 20.0259ZM12.7873 25.7883L13.4019 20.7613L16.0798 21.6558L12.7873 25.7883ZM23.2408 22.9784L13.797 19.8283L26.6539 2.48608L23.2408 22.9784Z"
              fill="blue"
            />
          </svg>
        </li>
      </ul>
    </div>

    <div
      class="minibox__header"
      :class="{ 'mb-4': !expandSpecies }"
      @click="expandSpecies = !expandSpecies"
    >
      Species
      <div class="toogle">
        <span v-if="!expandSpecies">+</span>
        <span v-else>-</span>
      </div>
    </div>
    <div v-if="expandSpecies" class="minibox__body mb-4">
      <span v-if="dataSpecies.length === 0">No Data Available</span>
      <ul>
        <li v-for="(item, key) in dataSpecies" :key="key">
          {{ item.name }}
          <svg
            class="ml-2"
            style="cursor: pointer"
            @click="goToSpecies(item)"
            width="15"
            height="15"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.1352 23.7248L27.9928 0.587221C28.0258 0.395139 27.9434 0.203058 27.7843 0.0932967C27.6965 0.0329283 27.5977 0 27.4935 0C27.4057 0 27.3234 0.0219522 27.2411 0.0658565L0.254199 15.4927C0.0840906 15.5915 -0.014682 15.7836 0.00178013 15.9812C0.0237296 16.1788 0.155426 16.3489 0.341997 16.4093L8.4633 19.1149L11.5911 27.6707C11.6624 27.8683 11.8545 28 12.063 28C12.085 28 12.1014 28 12.1179 27.9945C12.2441 27.978 12.3648 27.9122 12.4526 27.8024L12.5404 27.6927L12.5459 27.6982L17.0894 21.9851L23.4712 24.1145C23.6084 24.1584 23.7676 24.1419 23.8883 24.0706C24.0255 23.9992 24.1133 23.8675 24.1352 23.7248ZM1.73579 15.8056L24.3273 2.89769L8.72669 18.138L1.73579 15.8056ZM12.4746 20.0259L11.8271 25.3548L9.44553 18.8459L22.0774 6.50333L22.286 6.68444L12.5733 19.7844C12.5185 19.8557 12.4855 19.9381 12.4746 20.0259ZM12.7873 25.7883L13.4019 20.7613L16.0798 21.6558L12.7873 25.7883ZM23.2408 22.9784L13.797 19.8283L26.6539 2.48608L23.2408 22.9784Z"
              fill="blue"
            />
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PeopleDetails",
  data() {
    return {
      dataMovie: [],
      dataPeople: null,
      dataSpecies: [],
      expandFilm: false,
      expandSpecies: false
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
  },
  methods: {
    goToFilm(item) {
      this.$router.push({ path: `/movie/${item.id}` });
    },
    goToSpecies(item) {
      this.$router.push({ path: `/species/${item.id}` });
    }
  }
};
</script>

<style lang="scss" scoped></style>
