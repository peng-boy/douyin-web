<script setup lang="ts">
import { ref } from 'vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
const value = ref('')
</script>

<template>
  <div class="header-wrapper">
    <div class="search-wrapper flex items-center m-auto">
      <input v-model="value" class="w-[100px] px-[12px]" placeholder="搜索你感兴趣的内容" />
      <div class="parting-line w-[1px] h-[16px]"></div>
      <div class="w-[80px] flex justify-center items-center">
        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" class="ACMjZN5h">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.875 1.5a6.375 6.375 0 1 0 3.642 11.608l3.063 3.063a1.125 1.125 0 0 0 1.59-1.591l-3.062-3.063A6.375 6.375 0 0 0 7.875 1.5zM3.75 7.875a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0z"
            fill="#4F5168"
          ></path>
        </svg>
        <span class="btn-title">搜索</span>
      </div>
    </div>
    <div class="ml-auto">充钻石</div>
    <theme-switch />
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 12px;

  .search-wrapper {
    width: 333px;
    max-width: 600px;
    height: 42px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    background-color: rgba(22, 24, 35, 0.06);
    border: 1px solid rgba(22, 24, 35, 0.05);

    input {
      flex: 1;
    }

    .parting-line {
      border-left: 1px solid rgba(22, 24, 35, 0.2);
    }

    .btn-title {
      font-size: 16px;
      color: var(--font-color-light);
      margin-left: 3px;
    }
  }
}

.dark {
  .header-wrapper {
    .search-wrapper {
      background-color: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.05);

      .parting-line {
        border-left: 1px solid rgba(255, 255, 255, 0.16);
      }

      .btn-title {
        font-size: 16px;
        color: var(--font-color-light);
        margin-left: 3px;
      }
    }
  }
}

@media (min-width: 1240px) {
  .header-wrapper {
    .search-wrapper {
      height: 42px;
    }
  }
}
</style>
