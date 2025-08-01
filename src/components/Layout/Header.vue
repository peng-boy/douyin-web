<script setup lang="ts">
import { ref } from 'vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
const value = ref('')
</script>

<template>
  <div class="header-wrapper flex items-center h-[56px]">
    <div class="search flex items-center m-auto">
      <input v-model="value" />
      <div class="w-[80px] flex justify-center items-center">
        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="ACMjZN5h">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.875 1.5a6.375 6.375 0 1 0 3.642 11.608l3.063 3.063a1.125 1.125 0 0 0 1.59-1.591l-3.062-3.063A6.375 6.375 0 0 0 7.875 1.5zM3.75 7.875a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0z"
            fill="#4F5168"
          ></path>
        </svg>
        <span class="">搜索</span>
      </div>
    </div>
    <div class="ml-auto">充钻石</div>
    <theme-switch />
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  width: 100%;
  .search {
    max-width: 600px;
    height: 42px;
    border-radius: 12px;
    border: 1px solid var(--border-color);

    > input {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
