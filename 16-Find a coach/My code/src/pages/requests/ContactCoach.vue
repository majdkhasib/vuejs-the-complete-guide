<template>
  <base-spinner v-if="isLoading"></base-spinner>
  <form @submit.prevent="submitForm" v-else-if="!error && !sendSuccess">
    <div class="form-control">
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message"></textarea>
    </div>
    <p v-if="!formIsValid">Please enter a valid email and non-empty message.</p>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
  <base-dialog
    v-else-if="error"
    :show="!!error"
    title="An error occurred!"
    @close="handleError"
  >
    <div class="error">an error occured ({{ error }})</div>
    <template v-slot:actions>
      <base-button @click="resetForm" mode="outline">Cancel</base-button>

      <base-button @click="resetForm">Resubmit the form</base-button>
    </template>
  </base-dialog>

  <div v-else-if="sendSuccess" class="container">
    <div class="success">Sent a message succesfully</div>
    <div class="actions">
      <base-button link to="/coaches" mode="outline"
        >Naviagate to Coaches</base-button
      >
      <base-button @click="resetForm">Resubmit the form</base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
      isLoading: false,
      error: null,
      sendSuccess: false,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/contactCoach', {
          coachId: this.id,
          email: this.email,
          message: this.message,
        });
      } catch (error) {
        this.error = error;
      }
      this.isLoading = false;
      if (this.error) return;
      this.sendSuccess = true;
      // this.$router.replace('/coaches');
    },
    resetForm() {
      this.email = '';
      this.message = '';
      this.formIsValid = true;
      this.isLoading = false;
      this.error = null;
      this.sendSuccess = false;
    },
  },
};
</script>

<style scoped>
form {
  margin: 2em 1em 1em 1em;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 2em;
}
.actions {
  text-align: center;
  margin: 2em 0 0 0;
  display: flex;
  justify-content: center;
  gap: 1em;
  font-weight: bold;
}
.error {
  color: red;
}
.success {
  color: green;
}
</style>