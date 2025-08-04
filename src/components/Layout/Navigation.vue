<script setup lang="ts">
import { ref } from 'vue'

type MenuItem = {
  title: string
  icon: string
  link: string
  cornerMark: object
  type?: string
}

const menuGroup = ref<MenuItem[]>([
  {
    title: '精选',
    icon: '',
    link: '/jingxuan',
    cornerMark: {},
    type: 'menu',
  },
  {
    title: '推荐',
    icon: '',
    link: '/',
    cornerMark: {},
    type: 'menu',
  },
  {
    title: 'AI搜索',
    icon: '',
    link: '/aisearch',
    cornerMark: {},
    type: 'menu',
  },
  {
    title: '',
    icon: '',
    link: '',
    cornerMark: {},
    type: 'parting-line',
  },
  {
    title: '关注',
    icon: '',
    link: '/follow',
    cornerMark: {},
    type: 'menu',
  },
  {
    title: '朋友',
    icon: '',
    link: '/friend',
    cornerMark: {},
    type: 'menu',
  },
  {
    title: '我的',
    icon: '',
    link: '/user/self',
    cornerMark: {},
    type: 'menu',
  },
  {
    title: '',
    icon: '',
    link: '',
    cornerMark: {},
    type: 'parting-line',
  },
  {
    title: '直播',
    icon: '',
    link: '/from_nav',
    cornerMark: {},
    type: 'menu',
  },
  {
    title: '放映厅',
    icon: '',
    link: '/vs',
    cornerMark: {},
    type: 'menu',
  },
  {
    title: '短剧',
    icon: '',
    link: '/series',
    cornerMark: {},
    type: 'menu',
  },
])
</script>

<template>
  <a href="//www.douyin.com/" class="douyin-logo w-[30px] h-[56px]" />
  <div class="h-[56px] w-full">
    <div class="logo-img w-full"></div>
  </div>
  <div class="menu-wrapper w-full">
    <template v-for="(item, index) in menuGroup" :key="index">
      <div v-if="item.type === 'menu'" class="menu-box">
        <router-link
          :to="item.link"
          active-class="menu-active"
          class="menu-item"
          v-if="item.type === 'menu'"
        >
          <div class="iconfont w-[36px] h-[24px]">i</div>
          <div >{{ item.title }}</div>
          <div class="corner-mark"></div>
        </router-link>
      </div>
      <div
        v-else
        class="parting-line h-[9px] border-b-1 border-(--color-text-t3)"
      ></div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.douyin-logo {
  position: fixed;
  top: 0;
  left: 21px;
  background: url('@/assets/images/logo-horizontal-small-dark.svg') center center no-repeat;
  background-size: 30px 34px;
  transition: opacity 0.3s;
}
.logo-img {
  height: 165%;
}

.menu-wrapper {
  color: var(--color-text-t2);

  .menu-box {
    border-radius: 12px;
    margin: 8px 10px 0;
    .menu-item {
      width: 100%;
      height: 100%;
      padding: 6px 8px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      font-size: 12px;

      .corner-mark {
        margin: 0 4px 0 auto;
      }
    }
  }

  .menu-active {
    border-radius: 12px;
    color: var(--color-text-t0);
    background-color: var(--color-fill-hover-alpha10);
  }
  .parting-line {
    margin: 8px 18px 0;
  }
}


@media (min-width: 1240px) {
  .douyin-logo {
    width: 72px;
    background: url('@/assets/images/logo-horizont-dark.svg') center center no-repeat;
    background-size: 72px 28px;
    left: 32px
  }

  .menu-wrapper {
    .menu-box {
      border-radius: 12px;
      margin: 2px 16px 0;
      .menu-item {
        width: 100%;
        height: 100%;
        padding: 8px 0 8px 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;

        .corner-mark {
          margin: 0 4px 0 auto;
        }
      }
    }
    .menu-active {
      color: var(--color-text-t0);
      background-color: var(--color-fill-hover-alpha10);
    }
    .parting-line {
      height: 1px;
      border-bottom: 1px solid var(--color-line-l3);
      margin: 12px 24px 10px;
    }
  }
}
</style>
