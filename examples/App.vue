<template>
  <div :class="{ night: isNight }" style="height: 100vh; padding: 1em">
    <day-night v-model="isNight" />
    <div>现在是{{ isNight ? '晚上' : '白天' }}</div>
  </div>
</template>
<script lang="ts" setup name="App">
  import { ref } from 'vue';
  import DayNight from '../packages/DayNight.vue';

  const isNight = ref(false);
</script>
<style lang="scss" scoped>
  .night {
    background-color: #000;
    color: #fff;
  }
</style>
