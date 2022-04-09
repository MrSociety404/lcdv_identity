<script lang="ts" setup>
const onSubmit = async () => {
  await fetch('https://lcdv_identity/escape', {
    method: 'POST',
  });
};
</script>

<template lang="pug">
main.text-white.mx-auto(class='w-2/5')
  .relative.overflow-hidden.my-6
    h1.text-2xl.text-center.from-top-content Recensement effectué
  .text-center.relative.overflow-hidden.my-6
    svg.feather.feather-check-circle.mx-auto.my-12.from-top-content(xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
      path(d='M22 11.08V12a10 10 0 1 1-5.93-9.14').
      polyline(points='22 4 12 14.01 9 11.01').
  .text-center.relative.overflow-hidden
    button.bg-orange-600.px-5.py-2.rounded-lg.text-l.from-top-content.w-full(@click='onSubmit') Terminer
</template>

<style lang="scss"></style>
