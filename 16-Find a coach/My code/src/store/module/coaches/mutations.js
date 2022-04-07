export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },

  registerUser(state) {
    state.userIsRegistered = true;
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimeStamp(state) {
    state.lastFetched = new Date().getTime();
  },
};
