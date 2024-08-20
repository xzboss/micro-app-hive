<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <el-button type="primary"
      @click="$router.push({ name: 'menu-1', params: { msg: `我来自子应用${$route.path}传递的params`, data: $route.path } })">
      跳转/menu-1
    </el-button>
    <el-button type="primary"
      @click="$router.push({ name: 'menu-4', params: { msg: `我来自子应用${$route.path}传递的params`, data: $route.path } })">
      跳转/menu-4
    </el-button>
    <h4>收到的params：{{ $route.params }}</h4>
  </div>

</template>

<script></script>

<style scoped></style>
