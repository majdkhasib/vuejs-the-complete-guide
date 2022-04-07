<template>
  <div>
    <section>FILTER</section>
    <section>
      <ul>
        <li v-for="coach in coaches" :key="coach.id">{{ coach.firstName }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    coaches() {
      return this.$store.getters['coaches/coaches'];
    },
  },
};
</script>

<style>
</style>