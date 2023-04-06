<template>
  <div class="ods">
    <div class="number-of-projects">
      <p class="number">{{ numberOfProjects }}</p>
      <p>projetos</p>
    </div>
    <img :src="image" :alt="alt" />
    <div class="text">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ODSItem",
  props: {
    image: {
      type: String,
      require: false,
    },
    alt: {
      type: String,
      require: false,
    },
    title: {
      type: String,
      require: false,
    },
    numberOfProjects: {
      type: Number,
      require: false,
    },
  },
};
</script>

<style scoped>
.ods {
  width: 18rem;
  height: 18rem;
  border: 2px solid var(--brand-blue);
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
}

.ods:hover {
  border: 2px solid var(--brand-orange);
  box-shadow: 0px 0px 30px var(--brand-orange);
}

img {
  max-width: 100%;
  position: absolute;
  z-index: -1;
  top: -3.5rem;
  background-size: cover;
  transition: .3s;
}

.ods:hover img {
  transform: scale(1.1);
}

.ods p {
  margin-top: 0;
  font-size: 1.6rem;
  color: white;
}

.text {
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  min-height: 6rem;
  right: 0;
  left: 0;
  text-align: center;

  padding: 0rem .5rem;
}

.number-of-projects {
  position: absolute;
  right: -8.5rem;
  background-color: var(--brand-blue);
  padding: 0.5rem 2rem;
  border-bottom-left-radius: 6rem;
  transition: .3s;
  display: flex;
  gap: 1rem;
}

.ods:hover .number-of-projects {
  background-color: var(--brand-orange);
  right: 0rem;
}
</style>
