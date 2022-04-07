<template>
  <section>
    <base-card>
      <header><h2>Recieved Requests</h2></header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests">
        <request-item
          v-for="request in requests"
          :key="request.id"
          :email="request.userEmail"
          :message="request.message"
        ></request-item>
      </ul>
      <base-dialog
        v-else-if="error"
        :show="!!error"
        title="An error occurred!"
        @close="handleError"
      >
        <p>{{ error }}</p>
      </base-dialog>
      <h3 v-else>You don't have any requests</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
import { mapGetters } from 'vuex';
export default {
  data() {
    return { isLoading: false, error: null };
  },
  components: {
    RequestItem,
  },
  computed: {
    ...mapGetters('requests', ['requests', 'hasRequests']),
  },
  methods: {
    async getRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error;
      }
      this.isLoading = false;
    },
    handleError() {
      this.isLoading = false;
      this.error = null;
    },
  },
  created() {
    this.getRequests();
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>