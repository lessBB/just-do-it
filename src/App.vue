<template>
  <div>
    <Header></Header>
    <router-view ></router-view>
    <!-- 条件渲染 这样可读性高，逻辑性好 -->
    <Footer v-show="!$route.meta.isHidden"></Footer>
    <!-- <Footer v-show="$route.path === '/home' || !$route.path === '/search'"></Footer> -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
</style>
