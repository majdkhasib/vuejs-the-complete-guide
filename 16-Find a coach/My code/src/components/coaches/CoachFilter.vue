<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option"
      ><input
        type="checkbox"
        id="frontend"
        checked
        :onchange="setChosenAreas"
      />
      <label for="frotend">frontend</label></span
    >
    <span class="filter-option"
      ><input type="checkbox" id="backend" checked :onchange="setChosenAreas" />
      <label for="backend">Backend</label></span
    >
    <span class="filter-option">
      <input type="checkbox" id="career" checked :onchange="setChosenAreas" />
      <label for="career">Career</label></span
    >
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return { chosenAreas: { frontend: true, backend: true, career: true } };
  },
  methods: {
    setChosenAreas(event) {
      const inputId = event.target.id;
      const isAreaChecked = event.target.checked;
      this.chosenAreas = { ...this.chosenAreas, [inputId]: isAreaChecked };
      this.$emit('change-filter', this.chosenAreas);
    },
  },
};
</script>

<style>
</style>