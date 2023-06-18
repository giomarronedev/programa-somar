<template>
    <div class="item">
        <p class="title">{{ title }}</p>
        <p class="author">Por: {{ author }}</p>
        <p class="date">Em {{ date }}</p>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: "ProjectItem",
    props: {
      title: {
        type: String,
        require: true,
      },
      author: {
        type: String,
        require: true,
      },
      date: {
        type: String,
        require: true,
      }
    },
  };
  </script>
  
  <style scoped>
    .item {
        display: flex;
        background-color: rgb(221, 221, 221);
        padding: 1rem 3rem;
        border-radius: .8rem;
        font-size: 1.6rem;
        color: black;
        width: 50%;
        justify-content: space-around;
    }
    
    .item:hover {
        background-color: rgb(204, 204, 204);
    }
  </style>
  