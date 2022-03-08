<!--
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-03-02 11:23:23
 * @LastEditTime: 2022-03-07 18:07:43
 * @Email: str-liang@outlook.com
 * @FilePath: \vue-admin-template\src\layout\components\Sidebar\index.vue
 * @Environment: Win 10
 * @Description:
-->
<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />

        <!-- <sidebar-item
          v-for="route in rtsArr"
          :key="route.id"
          :item="route"
          :base-path="route.id"
        /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";

import dataObj from "@/data/data";

export default {
  components: { SidebarItem, Logo },
  data() {
    return {
      rtsArr: dataObj,
    };
  },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  mounted() {
    // console.log(this.$router.options.routes);
    // console.log(this.rtsArr);
  },
};
</script>
