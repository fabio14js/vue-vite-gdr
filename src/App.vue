<script>
import NavBar from "./components/navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<template>
  <div class="text-slate-200">
    <NavBar />
    <router-view></router-view>
  </div>
</template>
