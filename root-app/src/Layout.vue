<template>
  <div class="layout">
    <el-container style="height: 100%">
      <el-header class="el-header">
        <h4>{{ address }}</h4>
        <h4>params：{{ params }}</h4>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-button :type="router.hasRoute(route.name) ? 'primary' : 'danger'" v-for="route in allRoutes"
            :key="route.name" @click="goTo(route)">
            {{ route.path }}
          </el-button>
        </el-aside>
        <el-main class="main">
          <router-view>
            <template #default="{ Component, route }">
              <keep-alive>
                <component :is="Component" :key="route.name"></component>
              </keep-alive>
            </template>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { allRoutes } from "./router";

const router = useRouter();
const address = ref(window.location.href);
const params = ref(window.history.state.params);

watch(
  () => router.currentRoute,
  () => {
    address.value = window.location.href;
    params.value = window.history.state.params
  },
  { deep: true }
);

const goTo = (route) => {
  console.log(route)
  const currentPath = router.currentRoute.value.path
  router.push({ path: route.path });
};
</script>

<style lang="scss" scoped>
.layout {
  width: 800px;
  height: 100%;
  position: relative;
  border: 2px solid var(--el-color-primary);

  .aside {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .el-header {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main {
    border: 1px solid #fff;
  }
}
</style>
