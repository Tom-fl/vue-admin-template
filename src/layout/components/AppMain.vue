<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-02 11:23:23
 * @LastEditTime: 2022-03-02 14:01:56
 * @Email: str-liang@outlook.com
 * @FilePath: \vue-admin-template\src\layout\components\AppMain.vue
 * @Environment: Win 10
 * @Description:
-->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
