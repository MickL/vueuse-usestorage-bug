<script lang="ts" setup>
const toggle = useToggle();
</script>

<template>
  <input v-model="toggle.isActive" type="checkbox"/>
  <br/>
  <br/>
  {{ toggle.isActive }}
</template>
