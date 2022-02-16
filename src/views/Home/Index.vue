<template>
  <HomePageHeader />
  <HomePageContact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">
      Feedbacker © 2022
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HomePageContact from './Contact.vue'
import HomePageHeader from './Header.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HomePageHeader,
    HomePageContact
  }
})
</script>
