<template>
  <section id="welcome">
    <div class="white-bg-mask">
      <div class="wrapper">
        <div class="logo-area">
            <img src="../assets/somar-logo.svg" alt="">
        </div>
        <h1>teste</h1>
      </div>
    </div>
  </section>
</template>
<style>
section {
    background-image: url("../assets/landing-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}
.logo-area {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 3px solid var(--brand-blue);
    border-top: 0;
    padding: 3rem;
}
</style>
<script lang="ts">
export default {
  name: "LandingPage",
};
</script>
