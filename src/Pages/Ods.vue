<template>
  <HeaderComponent />
  <div>
    <div class="wrapper">
      <h1>Objetivos de Desenvolvimento Sustentável</h1>
      <main class="ods-area">
        <RouterLink to="/projects">
          <ODSItem
            title="Erradicação da Pobreza"
            image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-1.svg"
            :numberOfProjects="8"
            color="magenta"
          />
        </RouterLink>
        <ODSItem
          title="Fome zero"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-2.svg"
          :numberOfProjects="8"
          color="yellow1"
        />
        <ODSItem
          title="Saúde e bem-estar"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-3.svg"
          :numberOfProjects="8"
          color="green1"
        />
        <ODSItem
          title="Educação de qualidade"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg"
          :numberOfProjects="8"
          color="red1"
        />
        <ODSItem
          title="Igualdade de gênero"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-5.svg"
          :numberOfProjects="8"
          color="orange1"
        />
        <ODSItem
          title="Água potável e saneamento"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-6.svg"
          :numberOfProjects="8"
          color="blue1"
        />
        <ODSItem
          title="Energia limpa e acessível"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-7.svg"
          :numberOfProjects="8"
          color="yellow2"
        />
        <ODSItem
          title="Crescimento economico"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-8.svg"
          :numberOfProjects="8"
          color="red2"
        />
        <ODSItem
          title="Indústria, inovação e infraestrutura"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-9.svg"
          :numberOfProjects="8"
          color="orange2"
        />
        <ODSItem
          title="Redução da desigualdade"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-10.svg"
          :numberOfProjects="8"
          color="pink"
        />
        <ODSItem
          title="Cidades sustentáveis"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-11.svg"
          :numberOfProjects="8"
          color="orange3"
        />
        <ODSItem
          title="Consumo responsável"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-12.svg"
          :numberOfProjects="8"
          color="yellow3"
        />
        <ODSItem
          title="Combate à mudança climática"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-13.svg"
          :numberOfProjects="8"
          color="green2"
        />
        <ODSItem
          title="Vida na água"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-14.svg"
          :numberOfProjects="8"
          color="blue2"
        />
        <ODSItem
          title="Vida terrestre"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-15.svg"
          :numberOfProjects="8"
          color="green3"
        />
        <ODSItem
          title="Paz e justiça"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-16.svg"
          :numberOfProjects="8"
          color="blue3"
        />
        <ODSItem
          title="Parcerias"
          image="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-17.svg"
          :numberOfProjects="8"
          color="blue4"
        />
      </main>
    </div>

    <FooterComponent />
  </div>
</template>
<script lang="ts">
import HeaderComponent from "@/components/Header.vue";
import ODSItem from "../components/ODSItem.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "ODSPage",

  components: {
    HeaderComponent,
    ODSItem,
    FooterComponent,
  },
};
</script>
<style scoped>
.wrapper {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15rem;
}
.ods-area {
  margin-top: 5rem;
  display: flex;
  width: 110%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.4rem;
}
</style>
