import mutations from './mutations';
import actions from './actions';
import getters from './getters';
export default {
  namespaced: true,
  state() {
    return {
      lastFetched: null,
      userIsRegistered: false,
      coaches: [],
    };
  },
  mutations,
  actions,
  getters,
};
