<template>
  <div class="container">
    <div class="user-container">
      <div class="title">
        <h2 class="user-title">User</h2>
        <button @click="this.$router.push({ path: '/update-user' })">
          Update
        </button>
      </div>
      <h2 class="username">Username</h2>

      <span>Bio</span>
      <p class="bio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        numquam.
      </p>
      <span>Occupation</span>
      <p class="ocupation">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        numquam.
      </p>
      <span>Email</span>
      <p class="email">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
        numquam.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
