<template>
  <v-main class="login-form-wrap">
    <h1 class="text-h5 pb-8">Login to your Account</h1>
    <v-form class="login-form" ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              variant="solo"
              v-model="email"
              label="Email"
              type="email"
              required
              rounded
            />
            <v-text-field
              variant="solo"
              v-model="password"
              label="Password"
              type="password"
              required
            />
            <v-btn
              :disabled="!valid"
              color="primary"
              class="login-form__submit"
              @click="validate"
              width="100%"
              size="large"
            >
              Sign in
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <p class="text-body-2 pt-6">Don't have an account? Sign up</p>
  </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref(null);
const valid = ref<boolean>(false);
const email = ref<string>('');
const password = ref<string>('');

const validate = () => {
  form.value.validate();
  console.log('hey login');
};
</script>

<style lang="scss">
.login-form-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
}

.login-form {
  width: 480px;

  &__submit {
    text-transform: capitalize;
  }
}
</style>
