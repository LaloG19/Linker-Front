// src/composables/useTitle.ts
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

export function useTitle(defaultTitle: string) {
  const title = ref(defaultTitle);
  const route = useRoute();

  const updateTitle = (newTitle: string) => {
    document.title = newTitle;
  };

  watch(
    () => route.name,
    (newRouteName) => {
      if (newRouteName) {
        updateTitle(`${String(newRouteName)} - ${defaultTitle}`);
      } else {
        updateTitle(defaultTitle);
      }
    }
  );

  onMounted(() => {
    updateTitle(title.value);
  });

  onBeforeUnmount(() => {
    updateTitle(defaultTitle);
  });

  return {
    title,
    updateTitle,
  };
}
