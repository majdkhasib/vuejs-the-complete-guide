export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state) {
    return state.userIsRegistered;
  },
  shouldUpdate(state) {
    const lastFetched = state.lastFetched;
    if (!lastFetched) return true;
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetched) / 1000 > 60;
  },
};
