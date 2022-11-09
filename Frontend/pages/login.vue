<template>
  <v-main class="login-form-wrap">
    <h1 class="text-h5 pb-8">Login to your Account</h1>
    <v-form class="login-form" ref="form" v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div v-if="errorMessage" class="text-body-2 text-red pb-2">
              {{ errorMessage }}
            </div>
            <v-text-field
              variant="solo"
              v-model.trim="credentials.email"
              label="Email"
              type="email"
              :rules="emailRules"
              required
            />
            <v-text-field
              variant="solo"
              v-model.trim="credentials.password"
              label="Password"
              type="password"
              :rules="passwordRules"
              required
            />
            <v-btn
              :disabled="!valid"
              color="primary"
              class="login-form__submit"
              @click="onSubmit"
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

import { useAuthStore } from '@/stores';

import type { Credentials } from '@/types';

const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];

const passwordRules = [(v: string) => !!v || 'Password is required'];

const router = useRouter();
const authStore = useAuthStore();

const form = ref(null);
const valid = ref<boolean>(false);
const credentials = ref<Credentials>({ email: '', password: '' });
const errorMessage = ref<string | undefined>(undefined);

const onSubmit = async () => {
  if (!form.value.validate()) return;

  await authStore.login(credentials.value);

  if (authStore.isAuthorized) redirectTo();
  else errorMessage.value = authStore.errorMessage;
};

const redirectTo = () => router.push({ path: '/hello' });
</script>

<style lang="scss">
.login-form-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
}

.login-form {
  width: 480px;

  &__submit {
    text-transform: capitalize;
  }
}
</style>
