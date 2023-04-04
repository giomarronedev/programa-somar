<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --brand-blue: #0C4D8A;
  --brand-oragne: #F38D04;
}

html {
  font-size: 62.5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 3.6rem;
}

.wrapper {
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import LandingPage from "./Pages/Landing.vue";

export default defineComponent({
    name: "App",
    components: { LandingPage }
});
</script>
