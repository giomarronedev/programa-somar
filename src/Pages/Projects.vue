<template>
  <HeaderComponent />
  <main>
    <div class="wrapper">
      <h1>Projetos da ODS selecionada</h1>
      <div class="cards">
        <ProjectCard title="Doação de agasalhos 🧥" description="Recebemos doações de agasalhos e quaisquer tipos de itens que ajudem as pessoas a se manterem aquecidas durante o frio. Então, distribuímos as doações para famílias que precisam delas. Nos ajude a deixar o inverno das pessoas mais quentinho 🧡." image="https://images.pexels.com/photos/783222/pexels-photo-783222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <ProjectCard title="Manutenção e doação de computadores 💻" description="Se você tem uma máquina que está com defeito e já não vai mais usá-la, pode deixar ela com a gente se quiser! Fazemos manutenção de máquinas que você não quer mais e as doamos para pessoas que farão bom uso delas 🤓." image="https://images.pexels.com/photos/4792727/pexels-photo-4792727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import HeaderComponent from "@/components/Header.vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "ProjectsPage",

  components: {
    HeaderComponent,
    ProjectCard
  },
};
</script>
<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5rem;
    }

    .cards {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
</style>
