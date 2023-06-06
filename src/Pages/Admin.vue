<template>
  <header>
    <h2>Área de administrador</h2>
  </header>
  <main>
    <div class="control-panel">
      <ul>
        <li>Gerenciar projetos</li>
        <div class="line"></div>
        <li>Adicionar projeto</li>
      </ul>
    </div>
    <div class="manage">
      <h2>Gerenciar projetos</h2>
      <table cellspacing="0">
        <tr>
          <th>Projeto</th>
          <th>Autor</th>
          <th>Cadastrado em</th>
        </tr>
        <tr>
          <td>Erradicação da Pobreza</td>
          <td>Giovanne Marrone</td>
          <td>10/04/2023</td>
        </tr>
        <tr>
          <td>Saúde e bem-estar</td>
          <td>Djênifer Gurskas</td>
          <td>22/02/2023</td>
        </tr>
        <tr>
          <td>Educação de qualidade</td>
          <td>Giovane de Melo</td>
          <td>06/09/2022</td>
        </tr>
      </table>
    </div>
  </main>
  <FooterComponent />
</template>
<script lang="ts">
import FooterComponent from "../components/Footer.vue";

export default {
  name: "SomarAdmin",

  components: {
    FooterComponent,
  },
};
</script>
<style scoped>
header {
  background-color: var(--brand-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

header h2 {
  color: white;
}

main {
  display: flex;
  width: 100vw;
  max-width: 100%;
}
.control-panel {
  background-color: rgb(39, 39, 39);
  height: 50vh;
  width: 25rem;
  border-right: 2px solid var(--brand-blue);
  transition: 0.2s;
  overflow: hidden;
}

.control-panel:hover {
  border-right: 2px solid var(--brand-orange);
}

ul li {
  color: white;
  font-size: 1.6rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem 2rem;
  cursor: pointer;
}

ul li:hover {
  background-color: rgb(61, 61, 61);
}

.line {
  width: 100%;
  height: 1px;
  background-color: rgb(68, 68, 68);
}

table tr {
    font-size: 1.6rem;
}

.manage {
    background-color: antiquewhite;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.manage h2 {
    margin-bottom: 5rem;
}

table tr td {
    padding: 1.5rem 0rem;
    padding-left: 3rem;
    border-top: 1px solid black;
}


table {
    width: 80%;
    border: 1px solid black;
    border-radius: 1rem;
    overflow: hidden;
}

table th {
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.219);
    text-align: left;
    padding-left: 3rem;
}

</style>
