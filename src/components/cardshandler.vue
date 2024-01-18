<script>
import Card from "./card.vue";
import axios from "axios";

export default {
  components: {
    Card,
  },
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    fetchData: function () {
      axios.get("http://localhost:8000/api/characters").then((resp) => {
        this.characters = resp.data.characters.data;
      });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<template>
  <main class="mt-6 px-4 py-6">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="grid grid-cols-3 gap-6">
        <Card :key="character.id" v-for="character in characters" :character="character" />
      </div>
    </div>
  </main>
</template>
