<template>
  <div>
    <section>
      <coach-filter @change-filter="changeFilter"></coach-filter>
    </section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register" v-if="!isCoach"
          >Register as Coach</base-button
        >
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filterdCoaches"
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
    </base-card>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoahItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import { mapGetters } from 'vuex';

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      chosenAreas: { frontend: true, backend: true, career: true },
    };
  },
  computed: {
    filterdCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      const f = coaches.filter((coach) => {
        if (this.chosenAreas.frontend && coach.areas.includes('frontend'))
          return true;
        if (this.chosenAreas.backend && coach.areas.includes('backend'))
          return true;
        if (this.chosenAreas.career && coach.areas.includes('career'))
          return true;
        return false;
      });
      return f;
    },
    hasCoaches() {
      return this.filterdCoaches.length > 0;
    },
    ...mapGetters('coaches', ['isCoach']),
  },
  methods: {
    changeFilter(chosenAreas) {
      this.chosenAreas = chosenAreas;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.controls {
  display: flex;
  justify-content: space-between;
}
</style>