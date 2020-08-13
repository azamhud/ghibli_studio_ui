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

    <div class="minibox__header" @click="expandLocation = !expandLocation">
      Location
      <div class="toogle">
        <span v-if="!expandLocation">+</span>
        <span v-else>-</span>
      </div>
    </div>
    <div v-if="expandLocation" class="minibox__body">
      <span v-if="dataLocation.length === 0">No Data Available</span>
      <ul>
        <li v-for="(item, key) in dataLocation" :key="key">
          {{ item.name }}
          <svg
            class="ml-2"
            style="cursor: pointer"
            @click="goToLocation(item)"
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

    <div class="minibox__header" @click="expandPeople = !expandPeople">
      People
      <div class="toogle">
        <span v-if="!expandPeople">+</span>
        <span v-else>-</span>
      </div>
    </div>
    <div v-if="expandPeople" class="minibox__body">
      <span v-if="dataPeople.length === 0">No Data Available</span>
      <ul>
        <li v-for="(item, key) in dataPeople" :key="key">
          {{ item.name }}
          <svg
            class="ml-2"
            style="cursor: pointer"
            @click="goToPeople(item)"
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

    <div class="minibox__header" @click="expandSpecies = !expandSpecies">
      Species
      <div class="toogle">
        <span v-if="!expandSpecies">+</span>
        <span v-else>-</span>
      </div>
    </div>
    <div v-if="expandSpecies" class="minibox__body">
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

    <div
      class="minibox__header"
      :class="{ 'mb-4': !expandVehicles }"
      @click="expandVehicles = !expandVehicles"
    >
      Vehicles
      <div class="toogle">
        <span v-if="!expandVehicles">+</span>
        <span v-else>-</span>
      </div>
    </div>
    <div v-if="expandVehicles" class="minibox__body mb-4">
      <span v-if="dataVehicles.length === 0">No Data Available</span>
      <ul>
        <li v-for="(item, key) in dataVehicles" :key="key">
          {{ item.name }}
          <svg
            class="ml-2"
            style="cursor: pointer"
            @click="goToVehicles(item)"
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
  name: "MovieDetails",
  data() {
    return {
      dataMovie: null,
      dataLocation: [],
      dataPeople: [],
      dataSpecies: [],
      dataVehicles: [],
      expandDescription: false,
      expandLocation: false,
      expandPeople: false,
      expandSpecies: false,
      expandVehicles: false
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
  },
  methods: {
    goToLocation(item) {
      this.$router.push({ path: `/location/${item.id}` });
    },
    goToPeople(item) {
      this.$router.push({ path: `/people/${item.id}` });
    },
    goToVehicles(item) {
      this.$router.push({ path: `/vehicles/${item.id}` });
    },
    goToSpecies(item) {
      this.$router.push({ path: `/species/${item.id}` });
    }
  }
};
</script>

<style lang="scss" scoped></style>
