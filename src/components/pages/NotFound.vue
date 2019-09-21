<template lang="html">
  <h1>{{ msg || 'Error' }}</h1>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    msg: String
  }
}
</script>

<style lang="css" scoped>
</style>
