<template>
  <b-navbar toggleable="md" variant="dark" type="dark">
    <b-navbar-brand>Studio Ghibli</b-navbar-brand>
    <b-navbar-toggle target="navigation-collapse"></b-navbar-toggle>
    <b-collapse id="navigation-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          @click="goToMovie"
          class="disable-focus"
          :disabled="isDisabled('Movie')"
          >Movie</b-nav-item
        >
        <b-nav-item
          @click="goToLocation"
          class="disable-focus"
          :disabled="isDisabled('Location')"
          >Location</b-nav-item
        >
        <b-nav-item
          @click="goToPeople"
          class="disable-focus"
          :disabled="isDisabled('People')"
          >People</b-nav-item
        >
        <b-nav-item
          @click="goToSpecies"
          class="disable-focus"
          :disabled="isDisabled('Species')"
          >Species</b-nav-item
        >
        <b-nav-item
          @click="goToVehicles"
          class="disable-focus"
          :disabled="isDisabled('Vehicles')"
          >Vehicles</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    isDisabled(name) {
      if (this.$route.name !== name) return false;
      else return true;
    },
    goToMovie(item) {
      this.$router.push({ path: `/movie` });
    },
    goToSpecies(item) {
      this.$router.push({ path: `/species` });
    },
    goToLocation(item) {
      this.$router.push({ path: `/location` });
    },
    goToVehicles(item) {
      this.$router.push({ path: `/vehicles` });
    },
    goToPeople(item) {
      this.$router.push({ path: `/people` });
    }
  }
};
</script>

<style lang="scss" scoped>
.disable-focus a:focus {
  outline: none;
  box-shadow: none;
}
</style>
