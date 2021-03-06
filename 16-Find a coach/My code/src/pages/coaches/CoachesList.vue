<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <div>
      <section>
        <coach-filter @change-filter="changeFilter"></coach-filter>
      </section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh</base-button
          >
          <base-button link to="/register" v-if="!isCoach && !isLoading"
            >Register as Coach</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
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
      isLoading: false,
      error: null,
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
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
  created() {
    this.loadCoaches(false);
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