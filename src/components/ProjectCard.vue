<template>
  <RouterLink to="/project">
    <div class="item">
      <img :src="image" alt="" />
      <main class="card">
        <div class="text">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </main>
    </div>
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: "ProjectCard",

  props: {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped>
.item {
  position: relative;
  display: flex;
  align-items: center;
}
.card {
  width: 100%;
  position: absolute;
  left: -6rem;
  min-height: 15rem;
  max-height: 20rem;
  border: 2px solid var(--brand-blue);
  display: flex;
  gap: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  padding-left: 10rem;
}

.item:hover .card {
  border: 2px solid var(--brand-orange);
  transform: translateX(2rem);
  box-shadow: 0px 0px 2rem var(--brand-orange);
  background-color: var(--brand-orange);
}

.text {
  display: flex;
  flex-direction: column;
}
img {
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
  transition: .3s;
  border: 3px solid transparent;
}

.item:hover img {
  box-shadow: 0px 0px 2rem var(--brand-orange);
  border: 3px solid var(--brand-orange);
  transform: scale(.95);
}

h3 {
  font-size: 2.4rem;
}

p {
  font-size: 1.6rem;
  width: 80%;
}

a {
  text-decoration: none;
}
</style>
