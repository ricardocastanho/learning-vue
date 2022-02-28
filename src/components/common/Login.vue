<template>
  <CommonModal
    v-bind="$attrs"
    class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
  >
    <form @submit.prevent="handleSubmit">
      <label class="block">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
        <input
          id="email-field"
          v-model="state.email.value"
          type="email"
          :class="{
            'border-brand-danger': !!state.email.errorMessage
          }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="jane.dae@gmail.com"
        >
        <span
          id="email-error"
          v-if="!!state.email.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ state.email.errorMessage }}
        </span>
      </label>

      <label class="block mt-9">
        <span class="text-lg font-medium text-gray-800">Senha</span>
        <input
          id="password-field"
          v-model="state.password.value"
          type="password"
          :class="{
            'border-brand-danger': !!state.password.errorMessage
          }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
        >
        <span
          v-if="!!state.password.errorMessage"
          class="block font-medium text-brand-danger"
        >
          {{ state.password.errorMessage }}
        </span>
      </label>

      <button
        id="submit-button"
        :disabled="state.isLoading"
        type="submit"
        :class="{
          'opacity-50': state.isLoading
        }"
        class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
      >
        <icon v-if="state.isLoading" name="loading" class="animate-spin" />
        <span v-else>Entrar</span>
      </button>
    </form>
  </CommonModal>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useField } from 'vee-validate'

import CommonModal from '@/components/common/Modal.vue'

import { validateEmail, validatePassword } from '@/utils/validators'

interface ValidationInputs {
  value: string,
  errorMessage: string | undefined
}

interface State {
  hasErrors: boolean
  isLoading: boolean
  email: ValidationInputs
  password: ValidationInputs
}

interface SetupReturn {
  state: State
  handleSubmit(): void
}

export default defineComponent({
  name: 'HomePageHeader',
  components: {
    CommonModal
  },
  setup (): SetupReturn {
    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField<string>('email', validateEmail)

    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField<string>('password', validatePassword)

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })

    const handleSubmit = () => {
      console.log('handleSubmit')
    }

    return {
      state,
      handleSubmit
    }
  }
})
</script>
