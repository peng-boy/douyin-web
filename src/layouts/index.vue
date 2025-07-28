<script setup lang="ts">
import Navigation from '@/components/Layout/navigation.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="160px">

        <Navigation />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
