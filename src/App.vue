<template>
  <div>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from "./components/Navbar.vue";
import router from "./routes";
export default {
  components: {
    navbar,
    router,
  }
};
</script>