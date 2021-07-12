<template>
  <div class="container">
    <h2>Users</h2>
    <div class="user-container">
      <User />
    </div>

    <div class="loader" v-if="!users"></div>
  </div>
</template>

<script>
import User from "../components/User.vue";

export default {
  name: "Home",
  components: {
    User,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-left: 50px;
}
.user-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
