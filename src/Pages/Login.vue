<template>
  <main>
    <div class="left">
      <RouterLink to="/">
        <button>
          <font-awesome-icon icon="fa-solid fa-arrow-left" class="arrow" />
          Voltar
        </button>
      </RouterLink>
      <img src="../assets/fecomercio-logo.svg" alt="Sede do Fecomércio RS" />
    </div>
    <div class="right">
      <div class="content">
        <h1>Login administrativo</h1>
        <form action="login">
          <div class="inputs">
            <div class="input-area">
              <label class="form-label" for="name-input">Matrícula</label>
              <input type="text" id="name-input" />
            </div>
            <div class="input-area">
              <label class="form-label" for="name-input">Senha</label>
              <input type="password" id="name-input" />
            </div>
          </div>
          <a href="#">Esqueci minha senha...</a>
          <button>Entrar</button>
        </form>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
export default {
  name: "LoginPage",
};
</script>
<style scoped>
main {
  height: 100vh;
  display: flex;
  background-color: antiquewhite;
}
.left {
  background: linear-gradient(
    45deg,
    rgb(3, 34, 63) 0%,
    rgba(12, 77, 138, 1) 100%
  );
  max-width: 45%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left img {
  width: 30rem;
}

.left button {
  line-height: 0;
  position: absolute;
  top: 5rem;
  left: 10rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.6rem;
  background-color: transparent;
  border: 2px solid var(--brand-orange);
  border-radius: 1rem;
  color: var(--brand-orange);
  transition: .2s;
}

.left button:hover {
    box-shadow: 0px 0px 10px var(--brand-orange);
}

.right {
  background-color: white;
  max-width: 55%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  width: 70%;
  padding: 3rem;
}

h1 {
  margin-bottom: 4rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 15rem;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.input-area,
.input-area {
  position: relative;
}
.input-area input,
.input-area input {
  border: 2px solid var(--brand-blue);
  border-radius: 4px;
  position: relative;
  line-height: 1.5;
  height: 5rem;
  width: 100%;
  padding-inline: 1rem;
  transition: 0.3s;
}
.form-label {
  position: absolute;
  top: -23%;
  font-size: 1.4rem;
  z-index: 1;
  left: 1rem;
  background-color: white;
  padding: 0 5px;
  color: var(--brand-blue);
}

.input-area input:focus {
  outline: 0;
  border: 2px solid var(--brand-orange);
  box-shadow: 0px 0px 10px var(--brand-orange);
}

form a {
  font-size: 1.2rem;
  align-self: flex-end;
}

form button {
  background-color: transparent;
  border: 3px solid var(--brand-blue);
  border-radius: 9px;
  padding: 2rem;
  font-size: 1.6rem;
  color: var(--brand-blue);
  transition: 0.2s;
  font-weight: 800;

  margin-top: 3rem;
}

form button:hover {
  background-color: var(--brand-blue);
  border: 3px solid var(--brand-blue);
  padding: 2rem;
  font-size: 1.6rem;
  color: white;
}
</style>
