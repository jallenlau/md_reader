<template>
  <div class="v-reader">
    <title-bar />
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
      </div>
    </div>
    <menu-bar></menu-bar>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar.vue";
import MenuBar from "@/components/MenuBar.vue";

export default {
  components: {
    TitleBar,
    MenuBar,
  },
};
</script>

<style scoped></style>
