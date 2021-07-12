<template>
  <div class="container">
    <h2>Users</h2>
    <div class="user-container">
      <div
        class="user-wrapper"
        @click="user"
        v-for="(user, index) in users"
        :key="index"
      >
        <h4>{{ user.name }}</h4>
        <h5 class="role">Software Devloper</h5>
        <p>Call me gravity, cause I am down o earth</p>
        <h5>Mugerahughes@gmail.com</h5>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  computed: {
    users() {
      // return this.$store.dispatch("setUsers");
      return this.$store.getters.getUsers;
    },
  },
  methods: {
    user() {
      console.log("home");
      this.$router.push({ path: "/user" });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  .user-wrapper {
    width: 350px;
    background-color: rgb(255, 255, 255);
    border-radius: 7px;
    padding: 14px;
    cursor: pointer;
    h4 {
      font-size: 2.5rem;
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
      color: rgb(3, 215, 252);
    }
  }
}
</style>
