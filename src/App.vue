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
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  background: #b8bab9;
}
.container {
  max-width: 1300px;
  margin: auto;
  overflow: auto;
  padding: 2.5rem;
}
</style>
