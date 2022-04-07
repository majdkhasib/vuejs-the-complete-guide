export default {
  registerCoach(context, payload) {
    context.commit(
      'registerCoach',
      { id: new Date().toISOString(), ...payload },
      payload
    );
  },
};
