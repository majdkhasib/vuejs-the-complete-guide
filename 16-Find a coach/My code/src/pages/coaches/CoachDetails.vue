<template>
  <h2>Coach with id({{ id }})</h2>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>