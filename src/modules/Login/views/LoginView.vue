<template>
  <h1> Linker </h1>

  <div class="">
      <v-btn outlined color="white" class="mx-2" style="background-color: transparent; border-width: 2px; border-radius: 32px;">
        Button 1
      </v-btn>
      <v-btn outlined color="white" class="mx-2" style="background-color: transparent; border-width: 2px; border-radius: 32px;">
        Button 2
      </v-btn>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useTitle } from "../../../composables/useTitle";
const { updateTitle } = useTitle("Mi Aplicación");

onMounted(() => {
  updateTitle("Login");
});
</script>
