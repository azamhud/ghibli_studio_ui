import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../layouts/Dashboard.vue";
import Movie from "../views/Movie.vue";
import Location from "../views/Location.vue";
import People from "../views/People.vue";
import Species from "../views/Species.vue";
import Vehicles from "../views/Vehicles.vue";
import MovieDetails from "../views/MovieDetails.vue";
import LocationDetails from "../views/LocationDetails.vue";
import PeopleDetails from "../views/PeopleDetails.vue";
import SpeciesDetails from "../views/SpeciesDetails.vue";
import VehiclesDetails from "../views/VehiclesDetails.vue";
import store from "../store";

Vue.use(VueRouter);

async function getAllData(to, from, next) {
  if (store.getters["movie/movieList"].length === 0) {
    await store.dispatch("movie/getMovieList");
  }
  if (store.getters["location/locationList"].length === 0) {
    await store.dispatch("location/getLocationList");
  }
  if (store.getters["people/peopleList"].length === 0) {
    await store.dispatch("people/getPeopleList");
  }
  if (store.getters["species/speciesList"].length === 0) {
    await store.dispatch("species/getSpeciesList");
  }
  if (store.getters["vehicles/vehiclesList"].length === 0) {
    await store.dispatch("vehicles/getVehiclesList");
  }
  next();
}

const routes = [
  {
    path: "/",
    name: "Dashboard",
    beforeEnter: getAllData,
    redirect: "/movie",
    component: Dashboard,
    children: [
      {
        path: "movie",
        name: "Movie",
        component: Movie
      },
      {
        path: "movie/:id",
        name: "Movie Details",
        component: MovieDetails
      },
      {
        path: "location",
        name: "Location",
        component: Location
      },
      {
        path: "location/:id",
        name: "Location Details",
        component: LocationDetails
      },
      {
        path: "people",
        name: "People",
        component: People
      },
      {
        path: "people/:id",
        name: "People Details",
        component: PeopleDetails
      },
      {
        path: "species",
        name: "Species",
        component: Species
      },
      {
        path: "species/:id",
        name: "Species Details",
        component: SpeciesDetails
      },
      {
        path: "vehicles",
        name: "Vehicles",
        component: Vehicles
      },
      {
        path: "vehicles/:id",
        name: "Vehicles Details",
        component: VehiclesDetails
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
