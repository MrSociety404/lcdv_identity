<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigate = () => {
  router.push({ name: 'register' });
};
</script>

<template lang="pug">
main.text-white
  .flex.items-center.justify-center.my-28.relative.overflow-hidden(class='h-1/2')
    h1.text-2xl.text-center.mx-auto.from-top-content(class='w-4/6') Afin de mieux connaitre nos citoyens, nous recensons les nouveaux arrivants
  .text-center.relative.overflow-hidden
    button.bg-orange-600.px-5.py-2.rounded-lg.text-l.from-top-content(@click='navigate') Demarrer l’enregistrement
</template>

<style lang="scss"></style>
