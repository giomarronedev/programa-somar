<template>
  <section id="welcome">
    <div class="wrapper">
      <div class="welcome-content">
        <div class="logo-area">
          <img src="../assets/somar-logo.svg" alt="" />
        </div>
        <section class="content">
          <div class="text welcome-txt">
            <h1>
              O que é o <br />
              Programa SOMAR?
            </h1>
            <p>
              O programa SOMAR consiste na criação de projetos sociais por parte
              do Senac e Sesc. Projetos estes que contribuem para Objetivos de
              Desenvolvimento Sustentável (ODS) do Brasil. Aqui, você encontrará
              todos os projetos de cada unidade do Sesc ou Senac e poderá
              conferir quais ODS eles atendem.
            </p>
          </div>
          <div class="image right-blue"></div>
        </section>
        <div class="institutions">
          <img src="../assets/senac-logo.svg" alt="" />
          <img src="../assets/fecomercio-logo.svg" alt="" />
          <img src="../assets/sesc-logo.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section id="projects-data">
    <div class="wrapper">
      <h2>Impacto dos projetos do Senac e Sesc na sociedade</h2>
      <section class="content">
        <div class="image left-orange"></div>
        <div class="text">
          <p class="content-text">
            Descrição falando sobre o fato dos projetos do Senac e do Sesc
            contribuírem para os ODS da sociedade. Além disso, mencões de alguns
            projetos populares e que causaram mais impacto na sociedade até
            hoje.
          </p>
          <div class="data">
            <div class="item">
              <h3>72</h3>
              <p>Projetos no total</p>
            </div>
            <div class="line"></div>
            <div class="item">
              <h3>17</h3>
              <p>ODS atendidos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
  <section id="ods">
    <div class="wrapper">
      <h2>O que são os ODS?</h2>
      <p>
        ODS são os Objetivos de Desenvolvimento Sustentável e os projetos do
        Sesc e Senac visam contribuir para esses objetivos em questão resultando
        em um impacto positivo na sociedade brasileira. Os ODS incluem
        erradicação da pobreza, combate à fome, igualdade de gênero e muito
        mais. Logo abaixo você pode conferir todos os 17 Objetivos de
        Desenvolvimento Sustentável.
      </p>
      <div class="ods-area">
        <ODSItem title="Erradicação da Pobreza" image="https://images.pexels.com/photos/13036063/pexels-photo-13036063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Fome zero" image="https://images.pexels.com/photos/6994962/pexels-photo-6994962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Saúde e bem-estar" image="https://images.pexels.com/photos/8460123/pexels-photo-8460123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Educação de qualidade" image="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Igualdade de gênero" image="https://images.pexels.com/photos/5721337/pexels-photo-5721337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Água potável e saneamento" image="https://images.pexels.com/photos/2837863/pexels-photo-2837863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Energia limpa e acessível" image="https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Crescimento economico" image="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Indústria, inovação e infraestrutura" image="https://images.pexels.com/photos/1716008/pexels-photo-1716008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Redução da desigualdade" image="https://images.pexels.com/photos/13798215/pexels-photo-13798215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Cidades sustentáveis" image="https://images.pexels.com/photos/2071216/pexels-photo-2071216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Consumo responsável" image="https://images.pexels.com/photos/1933386/pexels-photo-1933386.jpeg?auto=compress&cs=tinysrgb&w=1600" :numberOfProjects=8 />
        <ODSItem title="Combate à mudança climática" image="https://images.pexels.com/photos/3044473/pexels-photo-3044473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Erradicação da Pobreza" image="https://images.pexels.com/photos/13036063/pexels-photo-13036063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Erradicação da Pobreza" image="https://images.pexels.com/photos/13036063/pexels-photo-13036063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Erradicação da Pobreza" image="https://images.pexels.com/photos/13036063/pexels-photo-13036063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
        <ODSItem title="Erradicação da Pobreza" image="https://images.pexels.com/photos/13036063/pexels-photo-13036063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :numberOfProjects=8 />
      </div>
    </div>
  </section>
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 112rem;
  align-items: center;
  height: 100%;
}

p {
  font-size: 1.8rem;
}

section {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#welcome {
  background-image: url("../assets/landing-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
}

.welcome-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

.logo-area {
  width: 112rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/elipse-welcome.svg");
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 335px;
}

.logo-area img {
  margin-bottom: 5rem;
}

.content {
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  /* margin-top: 6.4rem; */
}

.image {
  width: 56rem;
  height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px solid var(--brand-blue);
  transition: 0.5s;
  background-image: url("../assets/fecomercio1.jpg");
}

.image:hover {
  transform: scale(1.03);
}

.right-blue:hover {
  box-shadow: 10px 10px 0px var(--brand-blue);
}

.left-orange:hover {
  box-shadow: -10px 10px 0px var(--brand-orange);
}

.image img {
  max-width: 100%;
  max-height: 100%;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.welcome-txt {
  width: 48rem;
}

h1 {
  margin-bottom: 3rem;
}

.institutions {
  display: flex;
  gap: 9.5rem;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 7rem;
}

#projects-data {
  background: rgb(17, 104, 185);
  background: linear-gradient(
    45deg,
    rgb(3, 34, 63) 0%,
    rgba(12, 77, 138, 1) 100%
  );
  justify-content: center;
}

#projects-data .wrapper {
  display: flex;
  align-items: center;
  height: fit-content;
}

#projects-data,
#projects-data h2,
#projects-data p {
  color: white;
}

#projects-data h2 {
  width: 61rem;
  text-align: center;
}

#projects-data .content {
  margin-top: 9rem;
}

#projects-data .content .content-text {
  text-align: right;
  width: 50rem;
}

#projects-data .content .image {
  border: 2px solid var(--brand-orange);
}

.data {
  display: flex;
  background-color: var(--brand-orange);
  width: fit-content;
  padding: 2rem 4.5rem;
  border-radius: 1rem;

  max-width: 45rem;
  width: 100%;
  justify-content: space-between;

  align-self: end;
}

.data .item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.data .item h3 {
  font-size: 3.2rem;
  color: white;
}
.data .item p {
  font-size: 1.6rem;
}

.line {
  width: 2px;
  display: flex;
  background-color: var(--brand-blue);
}

#ods {
  padding-block: 8rem;
}

#ods p {
  margin-top: 5rem;
  text-align: center;
}

.ods-area {
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.4rem;
}
</style>
<script lang="ts">
import ODSItem from "../components/ODSItem.vue";

export default {
  name: "LandingPage",

  components: {
    ODSItem,
  },
};
</script>
