<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import useVuelidate from '@vuelidate/core';
import { required, minLength, maxLength, alpha } from '@vuelidate/validators';

const router = useRouter();
const store = useStore();

const states = ref({
  firstname: '',
  lastname: '',
  sex: 'm',
});

const rules = {
  firstname: {
    required,
    minLength: minLength(2),
    maxLength: maxLength(25),
    alpha,
  },
  lastname: {
    required,
    minLength: minLength(2),
    maxLength: maxLength(25),
    alpha,
  },
  sex: { required },
};

const v$ = useVuelidate(rules, states);

const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (!isFormCorrect) return;

  store.commit('setMainInfos', {
    firstname: v$.value.firstname.$model,
    lastname: v$.value.lastname.$model,
    sex: v$.value.sex.$model,
  });
  router.push({ name: 'details' });
};
</script>

<template lang="pug">
main.text-white.mx-auto(class='w-2/5')
  .relative.overflow-hidden.my-6
    h1.text-2xl.text-center.from-top-content Informations principales
  form(@submit.prevent='onSubmit')
    .my-6
      label.block.w-full.text-orange-500.font-semibold(for='firstname') Prénom
      input#firstname.block.w-full.p-2.rounded-md.text-black( name='firstname' v-model='v$.firstname.$model' placeholder='Vincent' @blur='v$.firstname.$touch' )
      p.text-red-600.font-medium(v-if='v$.firstname.$error') Prénom incorrect
    .my-6
      label.block.w-full.text-orange-500.font-semibold(for='lastname') Nom de famille
      input#lastname.block.w-full.p-2.rounded-md.text-black( name='lastname' v-model='v$.lastname.$model' placeholder='Vincent' @blur='v$.lastname.$touch' )
      p.text-red-600.font-medium(v-if='v$.lastname.$error') Nom incorrect
    .my-6
      label.block.w-full.text-orange-500.font-semibold sex
      .flex.items-center.justify-between.gap-4
        button.px-5.py-2.rounded-lg.text-l.w-full(
          @click.prevent='v$.sex.$model = "m"' 
          :class='v$.sex.$model === "m" ? "bg-orange-600": "bg-slate-400 text-dark" '
          ) Homme
        button.px-5.py-2.rounded-lg.text-l.w-full(
          @click.prevent='v$.sex.$model = "f"' 
          :class='v$.sex.$model === "f" ? "bg-orange-600": "bg-slate-400 text-dark" ') Femme
    .text-center.relative.overflow-hidden
      button.bg-orange-600.px-5.py-2.rounded-lg.text-l.from-top-content.w-full(type='submit') Suivant
</template>

<style lang="scss"></style>
