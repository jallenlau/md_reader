<template>
  <div class="menu-bar">
    <!--底部导航栏，目录、进程、主题色、字体-->
    <div class="menu-wrapper">
      <div class="icon-wrapper">
        <span class="icon-catalogue icon" @click="menuClickAction('catalogue')"
          >catalogue</span
        >
      </div>
      <div class="icon-wrapper">
        <span class="icon-progress icon" @click="menuClickAction('progress')"
          >progress</span
        >
      </div>
      <div class="icon-wrapper">
        <span
          class="icon-brightness icon"
          @click="menuClickAction('brightness')"
          >brightness</span
        >
      </div>
      <div class="icon-wrapper">
        <span class="icon-font icon" @click="menuClickAction('font')"
          >font</span
        >
      </div>
    </div>

    <!--点击导航栏后展开的详细控制页面-->
    <div class="setting-wrapper" v-show="ifSettingShow">
      <!--字体设置菜单-->
      <div class="setting-font-size" v-if="ifTagShow === 'font'">
        <div class="preview">A</div>
        <div class="select">
          <div class="select-wrapper">
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="preview">A</div>
      </div>

      <!--主题色设置菜单-->
      <div class="setting-theme" v-else-if="ifTagShow === 'brightness'">
        <div class="setting-theme-item">
          <div class="preview"></div>
          <div class="text"></div>
        </div>
      </div>

      <!--进程设置菜单-->
      <div class="setting-progress" v-else-if="ifTagShow === 'progress'">
        <div class="progress-wrapper">
          <input class="progress" type="range" max="100" min="0" step="1" />
        </div>
        <div class="text-wrapper">
          <span>XXX progress text</span>
        </div>
      </div>
    </div>

    <!--目录设置菜单-->
    <content-view v-show="ifContentViewShow"></content-view>
  </div>
</template>

<script>
import ContentView from "./ContentView.vue";

export default {
  components: {
    ContentView,
  },
  data() {
    return {
      ifSettingShow: false,
      ifContentViewShow: false,
      ifTagShow: "",
    };
  },
  methods: {
    //点击对应按钮设置显示详细设置菜单
    menuClickAction(tag) {
      this.ifTagShow = tag;
      if (this.ifTagShow == "catalogue") {
        this.ifSettingShow = false;
        this.ifContentViewShow = true;
      } else {
        this.ifSettingShow = !this.ifSettingShow;
      }
    },
  },
};
</script>

<style scoped></style>
