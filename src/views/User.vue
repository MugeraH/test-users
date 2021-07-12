<template>
  <div class="user-wrapper" v-for="(user, index) in users" :key="index">
    <div @click="viewUserDetails(user.id)">
      <h4>{{ user.name }}</h4>
      <h5 class="role">{{ user.occupation }}</h5>
      <p>{{ user.bio }}</p>
      <h5>{{ user.email }}</h5>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "User",
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },

  methods: {
    viewUserDetails(id) {
      this.$router.push({ path: `/user/${id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-wrapper {
  width: 350px;
  background: rgb(196, 196, 196);
  border-radius: 7px;
  padding: 14px;
  cursor: pointer;
  h4 {
    font-size: 2rem;
  }
  p {
    font-size: 1.3rem;
    padding: 10px 0;
  }
  h5 {
    font-size: 0.85rem;
    padding: 5px 0;
  }
  .role {
    color: rgb(6, 66, 112);
  }
}
</style>
