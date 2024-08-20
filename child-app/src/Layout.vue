<template>
  <router-view></router-view>
  <!-- <div class="layout">
    <el-container style="height: 100%">
      <el-header></el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-button
            type="primary"
            size="small"
            v-for="route in [
              { path: '/home', name: 'home' },
              { path: '/menu-1', name: 'menu-1' },
              { path: '/menu-2', name: 'menu-2' },
              { path: '/menu-3', name: 'menu-3' },
              { path: '/menu-4', name: 'menu-4' },
            ]"
            :key="route.name"
            @click="goTo(route)"
          >
            {{ route.path }}
          </el-button>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div> -->
</template>

<script>
export default {
  name: "Layout",
  methods: {
    goTo(route) {
      if (this.$route.path === route.path) return;
      this.$router.push({ name: route.name });
    },
  },
};
</script>

<style scoped>
.layout {
  width: 800px;
  height: 300px;
  position: relative;
  border: 2px solid #409eff;
}

.aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main {
  border: 1px solid #fff;
}
</style>
