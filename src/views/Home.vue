<template>
  <div class="container">
    <h2>Users</h2>
    <div class="user-container">
      <User />
    </div>
  </div>
</template>

<script>
// @ is an alias to /sr
import User from "./User.vue";

export default {
  name: "Home",
  components: {
    User,
  },
};
</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;

}
</style>
