<template>
  <router-link v-if="link" :to="to" :class="mode">
    <slot></slot>
  </router-link>
  <button v-else :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    link: { type: Boolean, required: false, deault: false },
    to: { type: String, required: false, default: '/' },
    mode: { type: String, required: false, default: null },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  background: transparent;
  background-color: #6302a3;
  border: 1px solid #6302a3;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  padding: 1em;
  margin-bottom: 1em;
}
a:hover,
a:active,
button:hover,
button:active {
  background-color: #8006d1;
  border-color: #8006d1;
}
.flat {
  background-color: transparent;
  color: #6302a3;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #6302a3;
  color: #6302a3;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>