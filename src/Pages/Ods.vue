<template>
  <HeaderComponent />
  <div class="wrapper">
    <h1>Objetivos de Desenvolvimento Sustentável</h1>
    <main class="ods-area">
      <RouterLink to="/projects">
        <ODSItem
          title="Erradicação da Pobreza"
          image="https://images.pexels.com/photos/13036063/pexels-photo-13036063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          :numberOfProjects="8"
          color="magenta"
          linkTo="/login"
        />
      </RouterLink>
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
      <ODSItem
        title="Igualdade de gênero"
        image="https://images.pexels.com/photos/5721337/pexels-photo-5721337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="orange1"
      />
      <ODSItem
        title="Água potável e saneamento"
        image="https://images.pexels.com/photos/2837863/pexels-photo-2837863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="blue1"
      />
      <ODSItem
        title="Energia limpa e acessível"
        image="https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="yellow2"
      />
      <ODSItem
        title="Crescimento economico"
        image="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="red2"
      />
      <ODSItem
        title="Indústria, inovação e infraestrutura"
        image="https://images.pexels.com/photos/1716008/pexels-photo-1716008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="orange2"
      />
      <ODSItem
        title="Redução da desigualdade"
        image="https://images.pexels.com/photos/13798215/pexels-photo-13798215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="pink"
      />
      <ODSItem
        title="Cidades sustentáveis"
        image="https://images.pexels.com/photos/2071216/pexels-photo-2071216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="orange3"
      />
      <ODSItem
        title="Consumo responsável"
        image="https://images.pexels.com/photos/1933386/pexels-photo-1933386.jpeg?auto=compress&cs=tinysrgb&w=1600"
        :numberOfProjects="8"
        color="yellow3"
      />
      <ODSItem
        title="Combate à mudança climática"
        image="https://images.pexels.com/photos/3044473/pexels-photo-3044473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="green2"
      />
      <ODSItem
        title="Vida na água"
        image="https://images.pexels.com/photos/1894346/pexels-photo-1894346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="blue2"
      />
      <ODSItem
        title="Vida terrestre"
        image="https://images.pexels.com/photos/2078772/pexels-photo-2078772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="green3"
      />
      <ODSItem
        title="Paz e justiça"
        image="https://images.pexels.com/photos/8111818/pexels-photo-8111818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        :numberOfProjects="8"
        color="blue3"
      />
      <ODSItem
        title="Parcerias"
        image="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1600"
        :numberOfProjects="8"
        color="blue4"
      />
    </main>
  </div>
</template>
<script lang="ts">
import HeaderComponent from "@/components/Header.vue";
import ODSItem from "../components/ODSItem.vue";

export default {
  name: "ODSPage",

  components: {
    HeaderComponent,
    ODSItem,
  },
};
</script>
<style scoped>
.wrapper {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
