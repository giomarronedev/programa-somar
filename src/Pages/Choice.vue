<template>
  <div>
    <HeaderComponent />
    <section>
        <RouterLink to="/ods">
            <button>
                <img src="../assets/robot-hand.jpg" alt="" />
                <div class="text">Escolher<br /><span>ODS</span></div>
            </button>
        </RouterLink>
      <button>
        <img src="../assets/sede-senac.jpg" alt="" />
        <div class="text">Escolher<br /><span>Unidade</span></div>
      </button>
      <button>
        <img class="img-3" src="../assets/save-earth.jpg" alt="" />
        <div class="text">Escolher<br /><span>Projeto</span></div>
      </button>
    </section>
  </div>
</template>
<script lang="ts">
import HeaderComponent from "../components/Header.vue";

export default {
  name: "ChoicePage",

  components: {
    HeaderComponent,
  },
};
</script>
<style scoped>
div {
  position: relative;
}
section {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: antiquewhite;
  z-index: -1;
}

button {
  max-width: 33.33%;
  width: 100%;
  overflow: hidden;
  height: 100%;
  border: 0;
  background-color: black;
  transition: 0.8s;
  position: relative;
}

img {
  height: 100%;
  min-width: 100%;
  opacity: 0.2;
  transition: 0.8s;
  position: absolute;
  top: 10rem;
  left: 0%;
}

.img-3 {
  top: 0;
}
.text {
  color: white;
  font-size: 4.8rem;
  font-weight: 800;
  background-color: transparent;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  padding-block: 5rem 10rem;
  transition: 0.8s;
}

button:hover {
  box-shadow: 0px 0px 70px var(--brand-orange);
  z-index: 3;
}

button:hover img {
  opacity: 1;
  transform: scale(1.1);
}

button:hover .text {
  padding-block: 5rem 15rem;
  background-color: rgba(0, 0, 0, 0.6);
}

span {
  color: var(--brand-orange);
}
</style>
