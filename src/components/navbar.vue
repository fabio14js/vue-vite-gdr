<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-slate-700 px-4 py-6">
    <div class="container my-0 mx-auto transition-all duration-150">
      <div class="flex justify-between items-center">
        <h1>My website</h1>
        <ul class="flex gap-4">
          <li>
            <RouterLink :to="'/'"> Home </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss"></style>
