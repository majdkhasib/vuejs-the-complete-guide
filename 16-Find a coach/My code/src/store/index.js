import { createStore } from 'vuex';
import coachesModule from './module/coaches/index';
const store = createStore({
  state() {
    return { userId: new Date().toISOString() };
  },
  modules: { coaches: coachesModule },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
