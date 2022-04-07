<template>
  <div>
    <section>FILTER</section>
    <section>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in coaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
          >{{ coach.firstName }}</coach-item
        >
      </ul>
      <h3 v-else>No coaches found</h3>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoahItem.vue';
export default {
  components: { CoachItem },
  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches']),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>