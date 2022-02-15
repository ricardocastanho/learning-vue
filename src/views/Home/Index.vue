<template>
  <HomePageHeader
    @login="handleLogin"
    @create-account="handleCreateAccount"
  />
  <HomePageContact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">
      Feedbacker © 2022
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import HomePageContact from './Contact.vue'
import HomePageHeader from './Header.vue'

interface SetupReturn {
  handleLogin(): void
  handleCreateAccount(): void
}

export default defineComponent({
  name: 'HomePage',
  components: {
    HomePageHeader,
    HomePageContact
  },
  setup (): SetupReturn {
    onMounted(() => {
      const token = window.localStorage.getItem('token')

      if (token) {
        const router = useRouter()
        router.push({ name: 'Feedbacks' })
      }
    })

    const handleLogin = () => {
      console.log('handleLogin')
    }

    const handleCreateAccount = () => {
      console.log('handleCreateAccount')
    }

    return {
      handleLogin,
      handleCreateAccount
    }
  }
})
</script>
