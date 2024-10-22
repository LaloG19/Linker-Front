<template>
    <p> Login View literalmente Firebase </p>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { useTitle } from "../../../composables/useTitle";
  const { updateTitle } = useTitle("Mi Aplicación");
  
  onMounted(() => {
    updateTitle("Login");
  });
  </script>
  