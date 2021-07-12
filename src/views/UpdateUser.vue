<template>
  <div class="container">
    <div class="user-container">
      <h2>Update User</h2>

      <div class="form">
        <form @submit.prevent="submitForm">
          <div class="form-control">
            <label for="username">Username</label>
            <input v-model="user.name" id="username" type="text" required />
          </div>
          <div class="form-control">
            <label for="occupation">Occupation</label>
            <input
              v-model="user.occupation"
              id="occupation"
              type="text"
              required
            />
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input v-model="user.email" id="email" type="email" required />
          </div>
          <div class="form-control">
            <label for="Bio">Bio</label>
            <textarea v-model="user.bio" id="Bio" required></textarea>
          </div>

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UpdateUser",

  computed: {
    user() {
      let id = this.$route.params.id;

      return this.getUser()(parseInt(id));
    },
  },

  methods: {
    ...mapGetters(["getUser"]),
    ...mapActions(["updateUser"]),

    submitForm() {
   

      this.updateUser(this.user);
      this.$router.push({ path: `/user/${this.user.id}` });
    },
  },
};
</script>

<style lang="scss" scoped>
.user-container {
  h2 {
    margin-left: 110px;
  }
  form {
    padding: 10px;
    width: 100%;
    border: 1px solid black;
    width: 80%;
    margin: 15px auto;
    border-radius: 5px;

    .form-control {
      display: flex;
      flex-direction: column;

      label {
        font-size: 1.3rem;
        margin: 8px 0;
      }

      input,
      textarea {
        outline: none;

        padding: 9px;
      }
      input {
        height: 38px;
        font-size: 1.3rem;
      }
      textarea {
        height: 100px;
        font-size: 1.2rem;
      }
    }

    button {
      color: #fff;
      background-color: rgb(79, 165, 50);
      font-size: 1.1rem;
      font-weight: bold;
      margin: 1rem 0;
      padding: 0.7rem 0.5rem;
      border: none;
      outline: none;
    }
  }
}
</style>
