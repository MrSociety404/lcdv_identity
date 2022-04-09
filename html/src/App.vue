<script setup lang="ts">
import { onMounted, ref } from 'vue';

const uiIsOpen = ref(true);

onMounted(async () => {
  await fetch('https://lcdv_identity/ready', {
    method: 'POST',
    body: JSON.stringify({}),
  });

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (data !== undefined && data.type === 'ui') {
      uiIsOpen.value = data.enable;
    }
  });
});
</script>

<template lang="pug">
.layout(v-show='uiIsOpen')
  .screen.bg-zinc-800.overflow-hidden
    .relative.overflow-hidden
      header
        img(src="./assets/img/lcdv.png", alt="LCDV Logo").header__logo.mx-auto.mt-10.mb-4
      router-view
</template>

<style lang="scss" scopped></style>
