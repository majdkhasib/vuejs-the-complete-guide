export default {
  registerCoach(context, payload) {
    context.commit(
      'registerCoach',
      { id: context.rootGetters.userId, ...payload },
      payload
    );
    context.commit('registerUser');
  },
};
