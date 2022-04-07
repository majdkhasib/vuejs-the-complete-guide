import { createStore } from 'vuex';
import coachesModule from './module/coaches/index';
import requestsModule from './module/requests/index';
const store = createStore({
  state() {
    return { userId: new Date().toISOString() };
  },
  modules: { coaches: coachesModule, requests: requestsModule },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
