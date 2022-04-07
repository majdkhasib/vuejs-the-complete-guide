<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  border-radius: 30px;
  padding: 0.5em 1em;
  margin-right: 0.5rem;
  color: white;
}

.frontend {
  background-color: #5a1bac;
}

.backend {
  background-color: #9813b9;
}

.career {
  background-color: #b82097;
}
</style>