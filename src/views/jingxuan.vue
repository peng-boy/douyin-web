<script setup lang="ts">

</script>

<template>
  <div class="choiceness-wrapper">
    <div v-for="(item,index) in Array.from({ length: 10 })" :key="index" class="box">{{index}}</div>
    <div
      class="parting-line h-[1px] border-b-2"
    ></div>
  </div>
</template>

<style scoped>
.choiceness-wrapper {
  width: 500px;
  height: 100%;
  background: #409eff;
  .box {
    width: 100%;
    height: 100px;
    background-color: #7d7d7d;
    margin-bottom: 10px;
  }
}
.parting-line {
  border-color: red;
  margin: 0 10px;
  box-sizing: border-box;
}
</style>
