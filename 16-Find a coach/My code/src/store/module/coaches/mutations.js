export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },

  registerUser(state) {
    state.userIsRegistered = true;
  },
};
