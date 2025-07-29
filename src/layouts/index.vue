<script setup lang="ts">
import Navigation from '@/components/Layout/navigation.vue'
import PaceIsland from '@/components/PaceIsland.vue'
import Header from '@/components/Layout/Header.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="72px">
        <Navigation />
        <pace-island />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.common-layout {
  height: 100vh;

  .el-container {
    height: 100%;

    .el-aside {
      position: relative;
    }
  }
}

@media (min-width: 1240px) {
  .common-layout {
    .el-container {
      .el-aside {
        width: 160px;
      }
    }
  }
}
</style>
