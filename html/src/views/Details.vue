<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import useVuelidate from '@vuelidate/core';
import { required, numeric, maxValue, minValue } from '@vuelidate/validators';

const router = useRouter();
const store = useStore();

const states = ref({
  dateofbirth: null,
  height: null,
});
const rules = {
  dateofbirth: {
    required,
    minValue: (dateofbirth: string) =>
      dateofbirth > new Date('01 January, 1920').toISOString(),
    maxValue: (dateofbirth: string) =>
      dateofbirth < new Date('01 January, 2005').toISOString(),
  },
  height: {
    required,
    numeric,
    maxValue: maxValue(210),
  },
};
const isLoading = ref(false);

const v$ = useVuelidate(rules, states);
const formData = computed(() => store.state.formData);

const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (!isFormCorrect) return;

  store.commit('setDetails', {
    dateofbirth: v$.value.dateofbirth.$model,
    height: v$.value.height.$model,
  });
  isLoading.value = true;

  fetch('https://lcdv_identity/register', {
    method: 'POST',
    body: JSON.stringify(formData.value),
  });

  isLoading.value = false;
  router.push({ name: 'result' });
};
</script>

<template lang="pug">
main.text-white.mx-auto(class='w-2/5')
  .relative.overflow-hidden.my-6
    h1.text-2xl.text-center.from-top-content Informations principales
  form(@submit.prevent='onSubmit')
    .my-6
      label.block.w-full.text-orange-500.font-semibold(for='dateofbirth') Date de naissance
      input#dateofbirth.block.w-full.p-2.rounded-md.text-black( 
        name='dateofbirth' 
        type='date' 
        v-model='v$.dateofbirth.$model' 
        @blur='v$.dateofbirth.$touch'  
      )
      p.text-red-600.font-medium(v-if='v$.dateofbirth.$error') Date invalide
    .my-6
      label.block.w-full.text-orange-500.font-semibold(for='height') Taille
      input#height.block.w-full.p-2.rounded-md.text-black( 
        name='height' 
        v-model='v$.height.$model' 
        placeholder='180cm' 
        @blur='v$.height.$touch' )
      p.text-red-600.font-medium(v-if='v$.height.$error') Taille invalide
    .text-center.relative.overflow-hidden
      button.bg-orange-600.px-5.py-2.rounded-lg.text-l.from-top-content.w-full(type='submit') Suivant
    .loading.bg-zinc-800.from-top-content-fast(v-show='isLoading')
      .ripple
      h2.text-2xl.font-semibold Veuillez patienter
</template>

<style lang="scss"></style>
