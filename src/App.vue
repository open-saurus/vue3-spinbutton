<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import SpinButton from './components/';

const count = ref(0);
</script>

<template>
  <SpinButton v-model="count" />
</template>
