import mutations from './mutations';
import actions from './actions';
import getters from './getters';
export default {
  namespaced: true,
  state() {
    return {
      userIsRegistered: false,
      coaches: [],
    };
  },
  mutations,
  actions,
  getters,
};
