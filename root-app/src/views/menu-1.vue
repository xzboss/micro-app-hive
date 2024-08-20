<template>
  <h1>new - {{ route.name }}</h1>
  <el-button type="primary" @click="router.push({ path: '/menu-3', state: { params: { msg: `主应用menu-1传递过来的值` } } })">
    跳转/menu-3
  </el-button>
  <el-button type="primary" @click="router.push({ path: '/menu-4', state: { params: { msg: `主应用menu-1传递过来的值` } } })">
    跳转/menu-4
  </el-button>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter()
</script>

<style lang="scss" scoped></style>
