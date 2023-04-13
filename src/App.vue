<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

button, textarea, input {
  font-family: 'Poppins', sans-serif;
}

button {
  cursor: pointer;
}

:root {
  --brand-blue: #0C4D8A;
  --brand-orange: #f39f04;

  --title: #101010;
  --paragraph: #2B2B2B;
}

h1, h2, h3, h4, strong {
  color: var(--title);
}

p {
  color: var(--paragraph);
}

html {
  font-size: 62.5%;
  line-height: 1.6;
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 {
  font-size: 3.6rem;
}

h2 {
  font-size: 3.2rem;
}

.wrapper {
  width: 112rem;
  max-width: 80%;
  margin: 0 auto;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
// import LandingPage from "./Pages/Landing.vue";

export default defineComponent({
    name: "App",
    // components: { LandingPage }
});
</script>
