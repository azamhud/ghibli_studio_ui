<template>
  <div>
    <NavigationBar />
    <div class="title">{{ this.$route.name }}</div>
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
export default {
  name: "Dashboard",
  components: {
    NavigationBar
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 15px;
  font-size: 30px;
}
</style>
