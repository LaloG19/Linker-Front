<template>
  <!-- Contenedor principal -->
  <v-container class="main-content" fluid>
    <router-view />
  </v-container>

  <!-- Tabs en la parte inferior -->
  <v-bottom-navigation grow>
    <v-btn icon @click="goTo('Home')">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn icon @click="goTo('Login')">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon @click="goTo('Profile')">
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
// Importamos el router
import { useRouter } from "vue-router";

const router = useRouter();

// Navegación a diferentes rutas
const goTo = (route) => {
  router.push({ name: route });
};
</script>

<style scoped>
.main-content {
  padding: 1rem;
  background: linear-gradient(135deg, #2b0a70, #340073);
  height: calc(100vh - 56px);
  display: flex;
}
</style>
