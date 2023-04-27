<template>
  <div>
    <HeaderComponent id="home"/>
    <section id="banner" class="banner">
      <h1>Manutenção e Doação de Computadores</h1>
      <p>
        Se você tem uma máquina que está com defeito e já não vai mais usá-la,
        pode deixar ela com a gente se quiser! Fazemos manutenção de máquinas
        que você não quer mais e as doamos para pessoas que farão bom uso delas
        🤓.
      </p>
      <div class="banner-info">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          class="fa-3x banner-icon"
        />
        <p>Av. Venâncio Aires, 93 - Cidade Baixa, Porto Alegre, RS</p>
      </div>
      <a href="#explanation">
        <font-awesome-icon
          icon="fa-solid fa-angles-down"
          class="banner-icon banner-arrow fa-4x"
        />
      </a>
      <img src="../assets/fecomercio1.jpg" alt="" />
    </section>
    <section class="section blue-bg" id="explanation">
      <div class="wrapper">
        <h2>Como funciona?</h2>
        <div class="content">
          <img src="../assets/fecomercio1.jpg" alt="" />
          <ul>
            <li>Recebemos doações de computadores</li>
            <li>Consertamos as máquinas doadas</li>
            <li>
              Doamos para pessoas que farão bom uso da máquina, como para
              estudo, por exemplo
            </li>
          </ul>
        </div>
        <a href="#impact">
          <font-awesome-icon
            icon="fa-solid fa-angles-down"
            class="section-arrow-down fa-4x"
          />
        </a>
      </div>
    </section>
    <section class="section blue reverse" id="impact">
      <div class="wrapper">
        <h2>Impactos do projeto</h2>
        <div class="content">
          <img src="../assets/fecomercio1.jpg" alt="" />
          <ul class="blue">
            <li>Aplicação na acessibilidade à tecnologia</li>
            <li>Incentivo ao estudo</li>
            <li>
              Aprendizado sem fronteiras para as pessoas que receberão máquinas
              ❤️
            </li>
          </ul>
        </div>
        <a href="#ods">
          <font-awesome-icon
            icon="fa-solid fa-angles-down"
            class="section-arrow-down fa-4x blue"
          />
        </a>
      </div>
    </section>
    <section class="section orange-bg" id="ods">
      <div class="wrapper">
        <h2>ODS para os quais esse projeto contrbui</h2>
        <div class="ods-area">
          <ODSItem
            title="Erradicação da Pobreza"
            image="https://images.pexels.com/photos/13036063/pexels-photo-13036063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            :numberOfProjects="8"
            color="magenta"
          />
          <ODSItem
            title="Fome zero"
            image="https://images.pexels.com/photos/6994962/pexels-photo-6994962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            :numberOfProjects="8"
            color="yellow1"
          />
          <ODSItem
            title="Saúde e bem-estar"
            image="https://images.pexels.com/photos/8460123/pexels-photo-8460123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            :numberOfProjects="8"
            color="green1"
          />
          <ODSItem
            title="Educação de qualidade"
            image="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            :numberOfProjects="8"
            color="red1"
          />
        </div>
        <a href="#home">
          <font-awesome-icon
            icon="fa-solid fa-angles-down"
            class="section-arrow fa-4x blue ods"
          />
        </a>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import HeaderComponent from "../components/Header.vue";
import ODSItem from "../components/ODSItem.vue";
export default {
  name: "ProjectPage",

  components: {
    HeaderComponent,
    ODSItem,
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 10rem);
  background-color: black;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  gap: 3rem;
}

.banner h1 {
  font-size: 6.2rem;
  color: var(--brand-orange);
  z-index: 1;
  max-width: 70%;
  text-align: center;
}

.banner p {
  font-size: 1.8rem;
  max-width: 112rem;
  text-align: center;
  color: white;
  z-index: 1;
}

.banner img {
  position: absolute;
  top: 0rem;
  opacity: 0.15;
}

.banner-info {
  display: flex;
  z-index: 1;
  gap: 2rem;
  margin-top: 4rem;
}

.banner-info p {
  color: var(--brand-orange);
  font-size: 1.8rem;
}

.banner-icon {
  color: var(--brand-orange);
}

h2 {
  padding: 3rem;
}
.wrapper {
  max-width: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner-arrow {
  position: absolute;
  bottom: 5rem;
  z-index: 1;
  transition: 0.2s;
}

.banner-arrow:hover,
.section-arrow-down:hover {
  transform: translateY(1rem);
}

.section {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.blue-bg {
  background: rgb(17, 104, 185);
  background: linear-gradient(
    45deg,
    rgb(3, 34, 63) 0%,
    rgba(12, 77, 138, 1) 100%
  );
}

.orange-bg {
  background: rgb(176, 117, 9);
  background: linear-gradient(
    40deg,
    rgba(176, 117, 9, 1) 0%,
    rgba(255, 195, 85, 1) 100%
  );
}

.section h2 {
  font-size: 8rem;
  color: var(--brand-orange);
  position: absolute;
  top: 3rem;
  left: 15rem;
}
#explanation .wrapper {
  align-items: normal;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
}

.content ul {
  color: white;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 35%;
}
.content img {
  width: 60%;
  margin-left: -5rem;
  height: 50rem;
  object-fit: cover;
  box-shadow: 10px 10px 0px var(--brand-orange);
}

.section-arrow-down {
  color: var(--brand-orange);
  position: absolute;
  bottom: 5rem;
  transition: 0.3s;
  left: 50%;
  right: 50%;
}
.blue-icon {
  color: var(--brand-blue);
}

.blue {
  color: var(--brand-blue);
}

.section.blue h2 {
  color: var(--brand-blue);
}

.section.reverse h2 {
  position: absolute;
  left: auto;
  right: 15rem;
}
.section.reverse .content {
  flex-direction: row-reverse;
}

.section.reverse .content img {
  margin-right: -5rem;
  box-shadow: -10px 10px 0px var(--brand-blue);
}

.section.reverse .content ul {
  color: var(--paragraph);
}
#ods h2 {
  max-width: 112rem;
  text-align: center;
  position: absolute;
  left: auto;
  font-size: 6rem;
  color: var(--brand-blue);
}

.ods-area {
  z-index: 1;
  display: flex;
  gap: 3rem;
}

.section-arrow.ods {
    position: absolute;
    bottom: 5rem;
    transition: .3s;
    transform: rotate(180deg);
}

.section-arrow.ods:hover {
    transform: rotate(180deg) translateY(1rem);
}
</style>
