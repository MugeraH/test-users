<template>
  <div class="container">
    <div class="title">
      <h2>Users</h2>
      <FilterUsers />
    </div>

    <div class="user-container">
      <User />
    </div>

    <div class="loader" v-if="allUsers.length === 0"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import User from "../components/User.vue";
import FilterUsers from "../components/FilterUsers.vue";

export default {
  name: "Home",
  computed: mapGetters(["allUsers"]),
  components: {
    User,
    FilterUsers,
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

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
