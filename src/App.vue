<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  mounted() {
    this.$store.dispatch("setUsers");
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
:root {
  --main-color: rgb(6, 66, 112);
  --white: #fff;
  --primary-light: rgb(3, 215, 252);
  --success: green;
  --grey: rgb(196, 196, 196);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: rgb(6, 66, 112) transparent;
  scroll-behavior: smooth;
}

*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgb(6, 66, 112);

  border: transparent;
}
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  background: #ffffff;
}
.container {
  max-width: 1300px;
  margin: auto;
  overflow: auto;
  padding: 2.5rem;
}

.user-container {
  padding: 2.5rem;
  border-radius: 10px;
}

.loader {
  border: 6px solid rgb(6, 66, 112);
  border-top: 6px solid #fff;
  border-radius: 50%;
  margin: 30px;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 500px) {
  html {
    font-size: 13px;
  }
  .container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .user-container {
    padding: 1.5rem 0rem;
    border-radius: 10px;
  }
}
</style>
