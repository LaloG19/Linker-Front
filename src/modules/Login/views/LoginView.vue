<template>
  <section class="container-login">
    <div style="height: 1px"></div>

    <h1 class="title">Linker</h1>

    <div class="btn-container">
      <v-btn
        outlined
        class="mx-2"
        style="
          background-color: transparent;
          border-width: 2px;
          border-radius: 2rem;
          border-style: solid;
          border-color: white;
          width: 70%;
        "
      >
        Iniciar Sesión
      </v-btn>
      <v-btn
        outlined
        class="mx-2"
        style="
          background-color: transparent;
          border-width: 2px;
          border-radius: 2rem;
          border-style: solid;
          border-color: white;
          width: 70%;
        "
      >
        Registrarse
      </v-btn>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useTitle } from "../../../composables/useTitle";
const { updateTitle } = useTitle("Mi Aplicación");

onMounted(() => {
  updateTitle("Login");
});
</script>

<style scoped>
.title {
  color: white;
  display: flex;
  padding: 0rem 1rem;
  font-weight: 300;
  text-align: center;
  justify-content: center;
}
.container-login {
  flex-grow: 1;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}
.btn-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
</style>
