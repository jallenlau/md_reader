<template>
<transition>
  <div class="title-wrapper">
    <router-link to="/main" class="left">
      <button-back class="icon-back icon" />
    </router-link>
    <div class="right">
      <div class="icon-wrapper">
        <span class="icon-cart icon"></span>
      </div>
      <div class="icon-wrapper">
        <button-theme class="icon-person icon" />
      </div>
      <router-link to="/signin" class="icon-wrapper">
        <button-signin class="icon-more icon" />
      </router-link>
    </div>
  </div>
</transition>
</template>

<script>
import ButtonBack from "./button/ButtonBack.vue";
import ButtonSignin from "./button/ButtonSignin.vue";
import ButtonTheme from "./button/ButtonTheme.vue";

export default {
  components: {
    ButtonBack,
    ButtonSignin,
    ButtonTheme,
  },
  name: "switch-theme",
};
</script>

<style scoped>

</style>
