<template>
  <div class="navbar">
    <router-link class="logo" to="/">Users</router-link>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>



<style lang="scss">
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.7rem;
  background: var(--main-color);
  color: var( --white);

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color:var( --white);
  }

  .logo {
    font-size: 1.7rem;
    font-weight: 700;
  }
}
</style>
