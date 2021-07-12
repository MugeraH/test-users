<template>
  <div class="container">
    <div class="user-container">
      <div class="title">
        <h2 class="user-title">User</h2>
        <button @click="updateUser(user.id)">
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
import { mapGetters } from "vuex";
export default {
  name: "User",

  computed: {
    user() {
      let id = this.$route.params.id;
      return this.getUser()(parseInt(id));
    },
  },

  methods: {
    ...mapGetters(["getUser"]),
    updateUser(id) {
      this.$router.push({ path: `/update-user/${id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-container {
  background: rgb(196, 196, 196);
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
      border: 1px solid rgb(196, 196, 196);
      outline: none;
      transition: all 400ms ease;

      &:hover {
        color: rgb(3, 215, 252);
        background-color: #fff;
        border: 1px solid rgb(3, 215, 252);
      }
    }
  }
  .username {
    font-size: 1.5rem;
    padding: 0.2rem 0;
  }
  span {
    font-size: 1rem;
    font-weight: bold;
    margin: 0.7rem 0;
    display: inline-block;
  }

  p {
    font-size: 1.15rem;
  }
  .email,
  .occupation {
    font-size: 1.1rem;
  }
}
</style>
