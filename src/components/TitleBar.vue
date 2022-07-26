<template>
  <div class="title-bar">
    <div class="back-button">
      <button-back>Back</button-back>
    </div>
    <div class="switch-theme">
      <button-theme />
    </div>
    <div class="sign-in">
      <button-signin />
    </div>
  </div>
</template>

<script>
import ButtonBack from "./button/ButtonSignin.vue";
import ButtonSignin from "@/button_components/ButtonSignin.vue";
import ButtonTheme from "@/button_components/ButtonTheme.vue";

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
/* .title-bar {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  display: flex;
  height: px2rem(48);
  background: rgb(179, 127, 127);
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
} */
</style>
