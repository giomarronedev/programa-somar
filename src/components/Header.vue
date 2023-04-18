<template>
  <header>
    <div class="wrapper">
      <a href="https://www.fecomercio-rs.org.br/home" target="_blank">
        <button class="fecomercio-btn">
            <img src="../assets/fecomercio-logo.svg" alt="Fecomércio" />
        </button>
      </a>
      <img class="logo" src="../assets/somar-logo.svg" alt="" />
      <button class="login">
        <font-awesome-icon icon="fa-solid fa-user" class="user-icon fa-lg" />
        login
      </button>
    </div>
  </header>
</template>
<script lang="ts">
export default {
  name: "HeaderComponent",
};
</script>
<style scoped>
header {
  background-color: white;
  height: 11rem;
  border-bottom: 3px solid var(--brand-blue);
}

header .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 20rem;
}

button {
  height: 11rem;
  background-color: transparent;
  border: 0;
  transition: 0.3s;
  border-bottom: 3px solid var(--brand-blue);
  padding: 1rem;
}

button:hover {
  background-color: rgba(12, 77, 138, 0.2);
  border-bottom: 3px solid var(--brand-orange);
}

button img {
  width: 18rem;
}

.login {
  padding: 0rem 4rem;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  font-size: 1.6rem;
  color: var(--brand-blue);
  transition: 0.2s;
}

.login:hover {
    background-color: var(--brand-blue);
    color: white;
    border-bottom: 3px solid var(--brand-blue);
}
</style>
