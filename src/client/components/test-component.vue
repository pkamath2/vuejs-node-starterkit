<template>
  <div>
    <h1><b-badge>{{ msg }}</b-badge></h1>
  </div>
</template>

<script>
export default {
  name: 'test-component',
  props: ['msg']
}
</script>