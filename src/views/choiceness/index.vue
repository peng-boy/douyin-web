<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('all')
function handleClick() {}
type Tabs = {
  title: string
  type: string
  isShow: boolean
}
// 游戏 二次元 音乐 影视 美食 知识 小剧场 生活vlog 体育 旅行 亲子 动物
const tabs = ref<Tabs[]>([
  {
    title: '全部',
    type: 'all',
    isShow: true,
  },
  {
    title: '游戏',
    type: 'game',
    isShow: true,
  },

  {
    title: '二次元',
    type: 'douga',
    isShow: false,
  },
  {
    title: '音乐',
    type: 'music',
    isShow: true,
  },
  {
    title: '影视',
    type: 'movie',
    isShow: true,
  },
  {
    title: '美食',
    type: 'food',
    isShow: true,
  },
  {
    title: '知识',
    type: 'knowledge',
    isShow: true,
  },
  {
    title: '小剧场',
    type: 'live',
    isShow: true,
  },
  {
    title: '生活vlog',
    type: 'life',
    isShow: true,
  },
  {
    title: '体育',
    type: 'sport',
    isShow: true,
  },
  {
    title: '旅行',
    type: 'travel',
    isShow: true,
  },
  {
    title: '亲子',
    type: 'family',
    isShow: true,
  },
  {
    title: '动物',
    type: 'animal',
    isShow: true,
  },
])
</script>

<template>
  <div class="choiceness-wrapper">
    <div class="tabs-wrapper">
      <div v-for="(item, index) in tabs" :key="index" class="tab">
        {{ item.title }}
      </div>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane
        v-for="(item, index) in tabs"
        :key="index"
        class="tab"
        :label="item.title"
        :name="item.type"
      >
        {{ item.title }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.tabs-wrapper {
  display: flex;
}
</style>
