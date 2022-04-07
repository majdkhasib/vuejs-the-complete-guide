<template>
  <form @submit.prevent="submit">
    <div class="form-control" :class="{ invalid: !firstNameIsValid }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstNameIsValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastNameIsValid }">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastNameIsValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !descriptionIsValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!descriptionIsValid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !rateIsValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rateIsValid">Rate must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{ invalid: !areasIsValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas"
          @blur="clearValidity('areas')"
        />
        <label for="frontend" class="checkbox-label"
          >Frontend Development</label
        >
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas"
          @blur="clearValidity('areas')"
        />
        <label for="backend" class="checkbox-label">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas"
          @blur="clearValidity('areas')"
        />
        <label for="career" class="checkbox-label">Career Advisory</label>
      </div>
      <p v-if="!areasIsValid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!formIsValid">
      Form is not valid,please fix the errors and resubmit
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['submit-form'],
  data() {
    return {
      firstName: '',
      firstNameIsValid: true,
      lastName: '',
      lastNameIsValid: true,
      description: '',
      descriptionIsValid: true,
      rate: null,
      rateIsValid: true,
      areas: [],
      areasIsValid: true,
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input + 'IsValid'] = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName === '') {
        this.firstNameIsValid = false;
        this.formIsValid = false;
      }
      if (this.lastName === '') {
        this.lastNameIsValid = false;
        this.formIsValid = false;
      }
      if (this.description === '') {
        this.descriptionIsValid = false;
        this.formIsValid = false;
      }
      if (!this.rate || this.rate <= 0) {
        this.rateIsValid = false;
        this.formIsValid = false;
      }
      if (this.areas.length === 0) {
        this.areasIsValid = false;
        this.formIsValid = false;
      }
    },
    submit() {
      this.validateForm();
      if (!this.formIsValid) return;
      this.$emit('submit-form', {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        hourlyRate: this.rate,
        areas: this.areas,
      });
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 1em 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5em;
}

.checkbox-label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}
.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>