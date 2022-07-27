<template>
  <router-link to="/main">
    <button-back class="icon-back icon" />
  </router-link>
</template>

<script>
import ButtonBack from "@/components/button/ButtonBack.vue";

export default {
  components: {
    ButtonBack,
  },
};
</script>
