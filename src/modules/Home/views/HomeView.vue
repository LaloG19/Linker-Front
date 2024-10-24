<style scoped>
main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
<template>
  <main class="text-center rounded-xl pa-4 w-100">
    <h2 class="py-2 text-uppercase">Menú temporal</h2>
    <div
      class="w-100 h-[10rem] bg-blue-darken-3 rounded-lg px-4 py-2 flex justify-center items-center"
    >
      <v-btn color="teal" class="ma-2 rounded-lg px-8" @click="goTo(1)">
        Home
      </v-btn>
      <v-btn
        color="orange-darken-2"
        class="ma-2 rounded-lg px-8"
        @click="goTo(2)"
      >
        Login
      </v-btn>
      <v-btn
        color="green-darken-2"
        class="ma-2 rounded-lg px-8"
        @click="goTo(3)"
      >
        Perifl
      </v-btn>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTitle } from "../../../composables/useTitle";

const { updateTitle } = useTitle("Mi Aplicación");
const router = useRouter();

onMounted(() => {
  updateTitle("Home");
});

const goTo = (route: any) => {
  switch (route) {
    case 1:
      router.push({ name: "Home" });
      break;
    case 2:
      router.push({ name: "Login" });
      break;
    case 3:
      router.push({ name: "Profile" });
      break;
    default:
      router.push({ name: "Home" });
  }
};
</script>
