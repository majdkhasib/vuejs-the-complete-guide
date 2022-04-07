<template>
  <section>
    <base-card
      ><h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3></base-card
    >
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interrested?Reach out</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view
    ></base-card>
  </section>
  <section>
    <base-card
      ><base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  state() {
    return { currentCoach: null };
  },
  computed: {
    fullName() {
      return this.currentCoach.firstName + ' ' + this.currentCoach.lastName;
    },
    rate() {
      return this.currentCoach.hourlyRate;
    },
    contactLink() {
      if (this.$route.path.endsWith('contact')) return this.$route.path;
      return this.$route.path + '/contact';
    },
    areas() {
      return this.currentCoach.areas;
    },
    description() {
      return this.currentCoach.description;
    },
  },
  created() {
    const coaches = this.$store.getters['coaches/coaches'];
    this.currentCoach = coaches.find((coach) => coach.id === this.id);
  },
};
</script>

<style>
</style>