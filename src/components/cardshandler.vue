<script>
import Card from "./card.vue";

export default {
  components: {
    Card,
  },
};
</script>

<template>
  <main class="mt-6 px-4 py-6">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="grid grid-cols-3 gap-6">
        <Card />
      </div>
    </div>
  </main>
</template>
