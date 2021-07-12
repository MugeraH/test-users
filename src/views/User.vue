<template>
  <div class="container">
    <div class="user-container">
      <div class="title">
        <h2 class="user-title">User</h2>
        <button @click="this.$router.push({ path: `/update-user/${user.id}` })">
          Update
        </button>
      </div>
      <h2 class="username">{{ user.name }}</h2>

      <span>Bio</span>
      <p class="bio">
        {{ user.bio }}
      </p>
      <span>Occupation</span>
      <p class="occupation">
        {{ user.occupation }}
      </p>
      <span>Email</span>
      <p class="email">
        {{ user.email }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user: [],
      users: [],
    };
  },
  // computed: {
  //   user: [],
  //   users: [],
  // },
  methods: {},
  mounted() {
    let id = this.$route.params.id;

    this.users = this.$store.getters.getUsers;
    

    let result = this.users.filter((user) => user.id == id);
    this.user = result[0];
  
  },
};
</script>

<style lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  button {
    color: #fff;
    background-color: rgb(3, 215, 252);
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.7rem 0.5rem;
    border: none;
    outline: none;
  }
}
.username {
  font-size: 1.5rem;
  padding: 0.6rem 0;
}
span {
  font-size: 1rem;
  font-weight: bold;
  margin: 0.7rem 0;
  display: inline-block;
}

p {
  font-size: 1.1rem;
}
.email,
.occupation {
  font-size: 1.1rem;
}
</style>
