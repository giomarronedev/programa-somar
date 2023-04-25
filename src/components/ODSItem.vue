<template>
    <div class="ods" :class="color">
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
      require: true,
    },
    numberOfProjects: {
      type: Number,
      require: true,
    },
    color: {
      type: String,
      require: false,
    }
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
  transition: 0.3s;
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

  padding: 0rem 0.5rem;
}

.number-of-projects {
  position: absolute;
  right: -9rem;
  background-color: var(--brand-blue);
  padding: 0.5rem 2rem;
  border-bottom-left-radius: 6rem;
  transition: 0.3s;
  display: flex;
  gap: 1rem;
  font-weight: 800;
}

.ods:hover .number-of-projects {
  background-color: var(--brand-orange);
  right: 0rem;
}

.magenta:hover {
  border: 2px solid rgb(255, 0, 76);
  box-shadow: 0px 0px 30px rgb(255, 0, 76);
}
.magenta:hover .number-of-projects {
  background-color: rgb(255, 0, 76);
}

.yellow1:hover {
  border: 2px solid rgb(211, 201, 68);
  box-shadow: 0px 0px 30px rgb(211, 201, 68);
}
.yellow1:hover .number-of-projects {
  background-color: rgb(211, 201, 68);
}

.green1:hover {
  border: 2px solid rgb(41, 150, 50);
  box-shadow: 0px 0px 30px rgb(41, 150, 50);
}
.green1:hover .number-of-projects {
  background-color: rgb(41, 150, 50);
}

.red1:hover {
  border: 2px solid rgb(199, 16, 16);
  box-shadow: 0px 0px 30px rgb(199, 16, 16);
}
.red1:hover .number-of-projects {
  background-color: rgb(199, 16, 16);
}

.orange1:hover {
  border: 2px solid rgb(255, 60, 0);
  box-shadow: 0px 0px 30px rgb(255, 60, 0);
}
.orange1:hover .number-of-projects {
  background-color: rgb(255, 60, 0);
}

.blue1:hover {
  border: 2px solid rgb(0, 178, 223);
  box-shadow: 0px 0px 30px rgb(0, 178, 223);
}
.blue1:hover .number-of-projects {
  background-color: rgb(0, 178, 223);
}

.yellow2:hover {
  border: 2px solid rgb(184, 181, 46);
  box-shadow: 0px 0px 30px rgb(184, 181, 46);
}
.yellow2:hover .number-of-projects {
  background-color: rgb(184, 181, 46);
}

.red2:hover {
  border: 2px solid rgb(124, 17, 53);
  box-shadow: 0px 0px 30px rgb(124, 17, 53);
}
.red2:hover .number-of-projects {
  background-color: rgb(124, 17, 53);
}

.orange2:hover {
  border: 2px solid rgb(228, 122, 23);
  box-shadow: 0px 0px 30px rgb(228, 122, 23);
}
.orange2:hover .number-of-projects {
  background-color: rgb(228, 122, 23);
}

.pink:hover {
  border: 2px solid rgb(255, 0, 170);
  box-shadow: 0px 0px 30px rgb(255, 0, 170);
}
.pink:hover .number-of-projects {
  background-color: rgb(255, 0, 170);
}

.orange3:hover {
  border: 2px solid rgb(240, 184, 64);
  box-shadow: 0px 0px 30px rgb(240, 184, 64);
}
.orange3:hover .number-of-projects {
  background-color: rgb(240, 184, 64);
}

.yellow3:hover {
  border: 2px solid rgb(153, 143, 8);
  box-shadow: 0px 0px 30px rgb(153, 143, 8);
}
.yellow3:hover .number-of-projects {
  background-color: rgb(153, 143, 8);
}

.green2:hover {
  border: 2px solid rgb(55, 148, 70);
  box-shadow: 0px 0px 30px rgb(55, 148, 70);
}
.green2:hover .number-of-projects {
  background-color: rgb(55, 148, 70);
}

.blue2:hover {
  border: 2px solid rgb(67, 181, 216);
  box-shadow: 0px 0px 30px rgb(67, 181, 216);
}
.blue2:hover .number-of-projects {
  background-color: rgb(67, 181, 216);
}
.green3:hover {
  border: 2px solid rgb(101, 207, 92);
  box-shadow: 0px 0px 30px rgb(101, 207, 92);
}
.green3:hover .number-of-projects {
  background-color: rgb(101, 207, 92);
}
.blue3:hover {
  border: 2px solid rgb(36, 130, 207);
  box-shadow: 0px 0px 30px rgb(36, 130, 207);
}
.blue3:hover .number-of-projects {
  background-color: rgb(36, 130, 207);
}
.blue4:hover {
  border: 2px solid rgb(36, 88, 131);
  box-shadow: 0px 0px 30px rgb(36, 88, 131);
}
.blue4:hover .number-of-projects {
  background-color: rgb(36, 88, 131);
}
</style>
