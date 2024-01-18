<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    character: {
      required: true,
      type: Object,
    },
  },
  components: { RouterLink },
};
</script>

<template>
  <RouterLink
    :to="{
      name: 'characters.show',
      params: { id: character.id },
    }"
  >
    <div class="flex flex-col gap-2 bg-slate-500 font-bold p-5 rounded-md drop-shadow-md">
      <h1>Character name: {{ character.nome }}</h1>
      <p>Description: {{ character.bio }}</p>
      <span v-if="character.type">Type: {{ character.type.name }}</span>
      <ul class="flex flex-col gap-2 mt-2">
        <li>Healthpoints {{ character.hp }}:</li>
        <li>Attack: {{ character.attacco }}</li>
        <li>Speed: {{ character.velocità }}</li>
        <li>Defence: {{ character.difesa }}</li>
      </ul>
      <ul class="flex flex-col gap-2 mt-2">
        <li v-for="item in character.items">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </RouterLink>
</template>
