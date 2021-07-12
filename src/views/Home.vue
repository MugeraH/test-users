<template>
  <div class="container">
    <h2>Users</h2>
    <div class="user-container">
      <div class="user-wrapper" v-for="(user, index) in users" :key="index">
        <div @click="viewUserDetails(user.id)">
          <h4>{{ user.name }}</h4>
          <h5 class="role">{{ user.occupation }}</h5>
          <p>{{ user.bio }}</p>
          <h5>{{ user.email }}</h5>
        </div>
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
    viewUserDetails(id) {
      console.log("home");
      this.$router.push({ path: `/user/${id}` });
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
